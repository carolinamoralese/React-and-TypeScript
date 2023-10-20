import { RandomFox } from "../components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <div>
      <head>
        <title>Proyecto</title>
      </head>
      <main>
        <h1 className="text-3xl font-bold underline">HOLA</h1>
        <RandomFox image={`https://randomfox.ca//images//${random()}.jpg`}/>
      </main>
    </div>
  );
}
