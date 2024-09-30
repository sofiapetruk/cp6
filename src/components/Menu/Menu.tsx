import Link from "next/link"

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Página 1</Link></li>
                <li><Link href="/">Página 2</Link></li>
                <li><Link href="/">Página 3</Link></li>
                <li><Link href="/">Página 4</Link></li>
            </ul>
        </nav>
    )
}