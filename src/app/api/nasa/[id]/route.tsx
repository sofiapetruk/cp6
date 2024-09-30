
import { TipoImagem } from "@/type";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/imagem.json', 'utf-8');
    const imagens: TipoImagem[] = JSON.parse(file);

    const imagem = imagens.find(p => p.id == params.id);

    return NextResponse.json(imagem);
}