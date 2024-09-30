"use client";
import { TipoImagem } from "@/type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Jogo({ params }: { params: { id: number } }) {

    const [jogo, setJogo] = useState<TipoImagem>()

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/nasa/${params.id}`);
            const data = await response.json();
            console.log(data);
            setJogo(data);
        }
        chamadaApi();
    }, []);

    return (
        <div>
            <h2>IMAGEM</h2>
            <div className="flex-col">
                <h3>ID: {params.id}</h3>
                <div className="flex">
                    <h3 className="font-bold">Nome:</h3><Image src=`${jogo?.imagem}`></Image>
            </div>
        </div>
        </div >
    )
}