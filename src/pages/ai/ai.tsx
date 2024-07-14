/* eslint-disable @typescript-eslint/no-explicit-any */
// src/ai.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AiProduct: React.FC = () => {
    const [data, setData] = useState<any>(null); // Use any type for generic data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                const response = await axios.get('https://project-backend-2-fgej.onrender.com/api/data'); // Fetch from the backend
                setData(response.data); // Store the response data
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>AI Data</h1>
            {Array.isArray(data) ? ( // Check if data is an array
                <ul>
                    {data.map((item: any, index: number) => (
                        <li key={index}>
                            <h2>{item.name || 'Unnamed Item'}</h2>
                            <p>{item.description || 'No description available.'}</p>
                            <p>Price: {item.price || 'N/A'}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre> // Fallback for non-array data
            )}
        </div>
    );
};
