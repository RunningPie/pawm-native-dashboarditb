import 'react-native-url-polyfill/auto'
import { Account, Avatars, Client, ID, Databases, Query } from 'react-native-appwrite';

export const AWConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.pawm.dashboarditb",
    projectId: '678532cc000b8280cae2',
    databaseId: "678534210017957161c1",
    usersCollectionId: "6785344100022a0008e9",
    coursesCollectionId: "678534a4001c7f3412fd",
    testsCollectionID: "67853aa400367af5143a",
    questionsCollectionId: "67853c3d0029b6e65daa",
    courseHistoriesCollectionId: "678534c10011090e5e98",
    testHistoriesCollectionId: "678534ce002e1465d969",
    storageId: "6785b43c000d86415240"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(AWConfig.endpoint) // Your Appwrite Endpoint
    .setProject(AWConfig.projectId) // Your project ID
    .setPlatform(AWConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (username, email, password) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        
        if (!newAccount) throw Error;

        const avatarURL = avatars.getInitials(username);

        await signIn(email, password);

        const now = new Date();

        const newUser = await databases.createDocument(
            AWConfig.databaseId,
            AWConfig.usersCollectionId,
            ID.unique(),
            {
                account_ID: newAccount.$id,
                email: email,
                username: username,
                profile_picture: avatarURL,
                join_date: now.toISOString()
            }
        );

        console.log("New User Document Successfully Created");

        return newUser;

    } catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    } 
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        console.log(currentAccount.$id);
        
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            AWConfig.databaseId,
            AWConfig.usersCollectionId,
            [Query.equal('account_ID', [currentAccount.$id])]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];

    } catch (error) {
        console.log("Get Current User Error: ", error);
        
        throw new Error(error);
    }
}

export const getAllContent = async (contentType) => {
    if (!contentType) throw new Error("Content type must be provided");

    let collectionID;
    let queryToSend;
    if (contentType == "courses") {
        collectionID = AWConfig.coursesCollectionId;
        queryToSend = [];
    } else if (contentType == "quizzes") {
        collectionID = AWConfig.testsCollectionID;
        queryToSend = [Query.equal('is_a_quiz', [true])];
    } else if (contentType == "tests") {
        collectionID = AWConfig.testsCollectionID;
        queryToSend = [Query.equal('is_a_quiz', [false])];
    }

    // console.log("Content Type: ", contentType);
    // console.log("CollectionID: ", collectionID);
    // console.log("Query: ", queryToSend);

    try {
        const allContents = await databases.listDocuments(
            AWConfig.databaseId,
            collectionID,
            queryToSend
        );

        return allContents.documents;
    } catch (error) {
        console.log("Get Content Error: ", error);
        throw new Error(error);
    }
}

export async function signOut() {
    try {
      const session = await account.deleteSession("current");
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

// Upload File
export async function uploadFile(file, type) {
    if (!file) return;
  
    const { mimeType, ...rest } = file;
    const asset = { type: mimeType, ...rest };
  
    try {
      const uploadedFile = await storage.createFile(
        appwriteConfig.storageId,
        ID.unique(),
        asset
      );
  
      const fileUrl = await getFilePreview(uploadedFile.$id, type);
      return fileUrl;
    } catch (error) {
      throw new Error(error);
    }
}

  // Get File Preview
export async function getFilePreview(fileId, type) {
  let fileUrl;

  try {
    if (type === "video") {
      fileUrl = storage.getFileView(appwriteConfig.storageId, fileId);
    } else if (type === "image") {
      fileUrl = storage.getFilePreview(
        appwriteConfig.storageId,
        fileId,
        2000,
        2000,
        "top",
        100
      );
    } else {
      throw new Error("Invalid file type");
    }

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}