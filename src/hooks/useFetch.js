import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setError("The url was not provided.");
            return;
        }

        setLoading(true);
        setError(null);

        fetch(url, {
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            if (!response.ok) { 
                throw new Error('Could not fetch the data for that resource.');
              } 

            return response.json();
        })
        .then(data => {
            setLoading(false);
            setData(data);
            setError(null);

            console.log('data from api: ', data)
        })
        .catch(error => {
            setLoading(false);
            setData(null);
            setError(error.message);
        })
    }, [url]);

    return {loading, data, error}
}