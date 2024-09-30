"use client";
import { TipoNasa } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NasaComponentProps {
  date: string; // Adiciona a propriedade date
}
export default function Catastrofe({ date }: NasaComponentProps) {
  const [nasa, setNasa] = useState<TipoNasa | null>(null);
  const dated = "2024-09-30"

  useEffect(() => {
    const buscaApi = async () => {
      try {
        const response = await fetch(`/api/nasa?date=${dated}`);
        const data = await response.json();
        setNasa(data);
      } catch (error) {
        console.error("Error ao buscar imagem da NASA:", error);
      }
    };

    buscaApi();
  }, [date]);

  return (
    <div>
      <h1 className="font-arial text-2xl font-bold mb-4">Catástrofes Cósmicas e Imagens de Eventos Espaciais</h1>
      <p className='font-arial'>As imagens da API podem mostrar fenômenos como explosões de supernovas, impactos de asteroides ou cometas. Isso se relaciona com a ideia de Velikovsky sobre catástrofes cósmicas que influenciaram a história da Terra. A visualização de tais eventos pode estimular discussões sobre como esses fenômenos podem ter impactado civilizações antigas, tanto em mitos quanto em relatos históricos.</p>
      <div>
        {nasa ? (
          <figure className='flex flex-col items-center'>
            <Image src={nasa.url} alt={nasa.title} width={720} height={720} style={{ width: "50%" }}/>
            <figcaption>{nasa.title}</figcaption>
            <Link href={`/Catastrofe/cat/${nasa.date}`} className='bg-blue-700 p-4 rounded-lg text-white mt-10 text-2xl'>Ver Mais</Link>
          </figure>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
