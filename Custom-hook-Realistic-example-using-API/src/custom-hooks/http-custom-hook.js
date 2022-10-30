import { useState, useCallback } from "react";

const useHttpHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const enterTaskHandler = useCallback(async (requestConfig, applydata) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
            method: requestConfig.method ? requestConfig.method: 'GET',
            headers: requestConfig.headers ? requestConfig.headers: {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body): null,
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applydata(data);
  
        // const generatedId = data.name; // firebase-specific => "name" contains generated id
        // const createdTask = { id: generatedId, text: taskText };
  
        // props.onAddTask(createdTask);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },[]);

    return {
        isLoading,
        error,
        enterTaskHandler

        // Above way is equivalent to below way, just an updated way of usage
        // isLoading: isLoading,
        // error: error,
        // enterTaskHandler: enterTaskHandler,
        
    }
}

export default useHttpHook;