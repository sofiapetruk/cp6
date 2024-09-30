"use client"
import { useEffect, useState } from "react";

export default function GET() {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const fetchApod = async () => {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
            const data = await response.json();
            setApod(data);
        };

        fetchApod();
    }, []);
}