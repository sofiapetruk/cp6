"use client";
import { TipoImagem } from '@/type';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Catastrofe() {
  const [item, setItem] = useState<TipoImagem | null>(null); // Mudança para um único item

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch("http://localhost:3000/api/nasa");
      const data = await response.json();
      if (data.length > 0) {
        setItem(data[0]); // Armazena apenas o primeiro item
      }
    };
    chamadaApi();
  }, []);

  return (
    <div>
      <h1>Catástrofes Cósmicas e Imagens de Eventos Espaciais</h1>
      <p>
        As imagens da API podem mostrar fenômenos como explosões de supernovas, impactos de asteroides ou cometas. Isso se relaciona com a ideia de Velikovsky sobre catástrofes cósmicas que influenciaram a história da Terra. A visualização de tais eventos pode estimular discussões sobre como esses fenômenos podem ter impactado civilizações antigas, tanto em mitos quanto em relatos históricos.
      </p>
      {item && ( // Verifica se o item existe antes de renderizar
        <ul>
          <li>
            <Image src={item.imagem} alt={`Imagem de evento espacial ${item.id}`} />
          </li>
          <li>
            <Link href={`/Catastrofe/cat/${item.id}`}>Editar</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
