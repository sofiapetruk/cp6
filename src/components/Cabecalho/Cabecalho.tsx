import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header className="flex flex-col items-center justify-center py-8">
            <h1 className="text-3xl font-bold mb-4">Livro "Worlds in Collision" by Immanuel Velikovsky</h1>
            <Menu />
        </header>
    )
}