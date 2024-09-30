"use client";
import { TipoNasa } from '@/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface NasaComponentProps {
  date: string;
}

export default function Linguagem({ date }: NasaComponentProps) {
  const [nasa, setNasa] = useState<TipoNasa | null>(null);
  const dated = "2024-08-30"

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
      <h1 className="text-royal-blue font-arial text-2xl font-bold"> Linguagem e Semântica da Astronomia</h1>
      <p className='font-arial'>As descrições e legendas das imagens da API podem ser examinadas sob a perspectiva da evolução da linguagem. Velikovsky fala sobre como a semântica se relaciona com eventos históricos. Podemos analisar como os termos usados para descrever fenômenos astronômicos modernos se conectam a palavras e conceitos em mitologia antiga, mostrando a influência da ciência na linguagem e como isso pode moldar nossa compreensão do passado.</p>
      <div>
          {nasa ? (
            <figure className='flex flex-col items-center'>
              <Image src={nasa.url} alt={nasa.title} width={720} height={720} style={{ width: "50%" }}/>
              <figcaption>{nasa.title}</figcaption>
            </figure>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
    </div>
  )
}
