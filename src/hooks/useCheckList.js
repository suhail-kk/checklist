import { useEffect, useState } from "react";

export const SHEET_API = import.meta.env.VITE_APP_SHEET_ID

export const useChecklist = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(SHEET_API);
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Failed to fetch GSheet:", err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { data, loading };
};
