import React from 'react'
import Image from 'next/image'

export default function Calculo() {
  return (
    <div>
        <h1>Calculo</h1>
        <Image
        src="/calculo.jpg" 
        alt="Descrição da imagem"
        width={500} 
        height={300} />
    </div>
  )
}
