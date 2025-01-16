import { RefreshControl, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const useAppwrite = (fn, contentType) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fn(contentType);
  
        setData(response);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    useEffect(() => {
      fetchData();
    }, []);
    
    const refetch = () => fetchData();

    // console.log(data);
    return { data, isLoading, refetch };
}

export default useAppwrite;