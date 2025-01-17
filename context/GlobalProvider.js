import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res) => {
            if (res) {
                setIsLoggedIn(true);
                setUser(res);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        })
        .catch ((error) => {
            // Ini pasti error kalo misalnya user guest (belum login)
            // biarin aja, karena ga mengganggu flow screensnya
            console.error('Error fetching user', error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    console.log("GlobalProvider isLoggedIn", isLoggedIn);
    console.log("GlobalProvider user", user);
    console.log("GlobalProvider isLoading", isLoading);
    
    return (
        <GlobalContext.Provider
        value={{
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;