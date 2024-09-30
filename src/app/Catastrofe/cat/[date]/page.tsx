"use client"
import { TipoNasa } from '@/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NasaPage({ params }: { params: { date: string } }) {
  const [nasa, setNasa] = useState<TipoNasa | null>(null);
  const { date } = params;

  useEffect(() => {
    const fetchNasa = async () => {
      try {
        const response = await fetch(`/api/nasa/${date}`); // Faz a requisição para a API com a data
        const data = await response.json();
        setNasa(data);
      } catch (error) {
        console.error("Error fetching NASA image:", error);
      }
    };

    fetchNasa();
  }, [date]); // Adiciona date como dependência

  return (
    <div>
        {nasa ? (
            <div>
                <p className='m-12'>{nasa.explanation}</p>
                <figure className='flex flex-col items-center'>
                    <Image src={nasa.url} alt={nasa.title} width={720} height={720} style={{ width: "50%" }}/>
                    <figcaption>{nasa.title}</figcaption>
                </figure>
            </div>

        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}
