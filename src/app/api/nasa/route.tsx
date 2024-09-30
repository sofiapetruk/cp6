import { TipoImagem } from "@/type";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    const file = await fs.readFile(process.cwd() + '/src/data/imagem.json', 'utf-8')
    const data: TipoImagem[] = JSON.parse(file)

    return NextResponse.json(data)
}


