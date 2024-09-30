"use client";
import { TipoNasa } from '@/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface NasaComponentProps {
  date: string;
}

export default function Interpretacao({ date }: NasaComponentProps) {
  const [nasa, setNasa] = useState<TipoNasa | null>(null);
  const dated = "2024-07-30"

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
        <h1>Interpretação de Mitos e Representações Visuais</h1>
        <p>As imagens astronômicas podem ser comparadas com representações artísticas antigas que refletem a percepção humana do cosmos. Velikovsky sugere que muitos mitos têm raízes em eventos cósmicos reais. Analisar como essas imagens modernas se relacionam com ícones e símbolos em culturas antigas pode revelar uma continuidade na maneira como a humanidade tem interpretado o universo ao longo do tempo.</p>
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
