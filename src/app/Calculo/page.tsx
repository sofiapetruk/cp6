import React from 'react'
import Image from 'next/image'

export default function Calculo() {
  return (
    <div>
        <h1 className='font-arial text-2xl font-bold mb-4'>Calculo</h1>
        <Image
        src="/conta.jpg" 
        alt="Descrição da imagem"
        width={500} 
        height={300} />
    </div>
  )
}
