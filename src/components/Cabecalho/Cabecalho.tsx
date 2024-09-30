import { headers } from "next/headers";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header>
            <h1>Livro "Worlds in Collision" by Immanuel Velikovsky</h1>
            <Menu />
        </header>
    )
}