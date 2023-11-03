import { useRef } from "react";

type Props = {image:string}

export const RandomFox = ({image}:Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
 
  return (
    <div className="flex items-center justify-center">
      <div className="w-48 h-48 p-4 rounded-md shadow-md">
      <img ref={node} src={image} className="w-full h-full rounded" 
      />
      </div>
    </div>
 
  )
};
