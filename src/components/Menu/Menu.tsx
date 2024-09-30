import Link from "next/link"

export default function Menu() {
    return (
        <nav>
            <ul className="flex space-x-4">
                <li><Link href="/" className="text-lg font-semibold">Home</Link></li>
                <li><Link href="/Catastrofe" className="text-lg font-semibold">Catastrofe</Link></li>
                <li><Link href="/Interpretação" className="text-lg font-semibold">Interpretação</Link></li>
                <li><Link href="/Linguagem" className="text-lg font-semibold">Linguagem</Link></li>
                <li><Link href="/" className="text-lg font-semibold">Cálculos</Link></li>
            </ul>
        </nav>
    )
}