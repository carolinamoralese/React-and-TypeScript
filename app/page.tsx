'use client';
import { useState } from "react";
import { RandomFox } from "../components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

 function Home() {
  const [images, setImagenes] = useState([
    `https://randomfox.ca//images//${random()}.jpg`,
    `https://randomfox.ca//images//${random()}.jpg`,
    `https://randomfox.ca//images//${random()}.jpg`,
    `https://randomfox.ca//images//${random()}.jpg`,
  ]);
  return (
    <div>
      <head>
        <title>Proyecto</title>
      </head>
      <main>
        <h1 className="text-3xl font-bold underline">HOLA</h1>
        {images.map((image, index) => (
          <div key={index}className="p4">
          <RandomFox image={image} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default (Home); // Marcar el componente como cliente