import 'react-native-url-polyfill/auto'
import { Account, Client, ID } from 'react-native-appwrite';

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

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}