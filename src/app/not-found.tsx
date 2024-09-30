import Image from "next/image"

export default function NotFound() {
    return(
    <div>
        <h1>404: Page Not Found</h1>
        <p>Página que você está procurando não foi encontrada</p>
        <Image src="/images.jpg" alt="Imagem de erro" width={500} height={300} />
    </div>
    )
}