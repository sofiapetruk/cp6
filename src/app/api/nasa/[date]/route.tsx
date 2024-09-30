import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { date: string } }) {
  const { date } = params;

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=Qsml1RF092ZqnHSnas5QWESlVAXZus1IdDCtTC5A&date=${date}`);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data from NASA API" }, { status: 500 });
  }
}
