'use client';
import { useState } from "react";
import type { MouseEventHandler, } from "react";
import { RandomFox } from "../components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

//generar ID unicos
const genererId = () => Math.random().toString(36).substring(2,9)

type ImageItems = {id:string; url:string}

 function Home() {
  const [images, setImagenes] = useState<Array<ImageItems>>([]);

const addNewImage: MouseEventHandler<HTMLButtonElement> = (event) => {

  const newImageItem: ImageItems = {
    id:genererId(),
    url:`https://randomfox.ca//images//${random()}.jpg`
  }

  setImagenes([
    ...images,
    newImageItem
  ])
}

  return (
    <div>
      <head>
        <title>Proyecto</title>
      </head>
      <main>
        <h1 className="text-3xl font-bold underline">HOLA</h1>
        <button onClick={addNewImage}>Agregar nueva imagen</button>
        {images.map(({id, url}) => (
          <div key={id}className="p-4">
          <RandomFox image={url} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default (Home); // Marcar el componente como cliente