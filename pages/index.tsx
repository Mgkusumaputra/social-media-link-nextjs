import Image from "next/image";
import data from "../data.json"

export default function Home() {
    return (
      <div className="flex items-center justify-center">
        <Image src={data.avatar} alt={data.name} width={64} height={64}/>
      </div>
    );
}


