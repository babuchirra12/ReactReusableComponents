import { useState, useEffect } from 'react'

function UseFetch({ url, Options }) {
    const [responce, setResponce] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);

            try {
                const res = await fetch(url, Options);
                const json = await res.json();
                setResponce(json);
                setIsLoading(false);

            } catch (error) {
                setError(error)
            }
        };
        fetchData();
    }, []);
    return { responce, error, isLoading }
}

export default UseFetch