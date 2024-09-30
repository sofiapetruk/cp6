import React from 'react'
import Image from 'next/image'

export default function Calculo() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-arial text-2xl font-bold my-4'>Calculo</h1>
        <Image src="/conta.jpg" alt="Descrição da imagem" width={720} height={720} />
    </div>
  )
}
