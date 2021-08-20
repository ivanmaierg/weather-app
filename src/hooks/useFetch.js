import { useState, useEffect } from "react";

const useFetch = (cb) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                await cb()
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [])
    return { loading, response, error };
};

export default useFetch