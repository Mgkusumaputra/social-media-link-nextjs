import Image from "next/image";
import data from "../data.json";

import {AiOutlineLinkedin} from 'react-icons/ai'
import { IconContext } from "react-icons";

export default function Home() {
    function LinkContainer({ url, title, image }: { url: string; title: string; image?: string }) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 w-full rounded-full hover:scale-105 transition-all bg-slate-500 mb-3 max-w-3xl"
            >
                <div className="flex justify-center items-center text-center w-full">
                    <div className="w-8 h-8">
                        {image && <Image className="rounded-full" src={image} alt={title} width={32} height={32} />}
                    </div>
                    <h2 className="flex justify-center items-center w-full text-white">{title}</h2>
                </div>
            </a>
        );
      }

    interface Data {
        name: string;
        avatar: string;
        links: links[];
        socials: Social[];
    }

    interface links {
        href: string;
        title: string;
        image?: string;
    }

    interface Social {
        url: string;
        icon: string;
    }

    return (
        <div className="flex items-center justify-center flex-col mx-auto w-full mt-9 px-5">
            <Image className="rounded-full" src={data.avatar} alt={data.name} width={96} height={96} />
            <h1 className="py-4 font-semibold text-lg">{data.name}</h1>
            {data.links.map((links) => (
                <LinkContainer key={links.url} {...links} />
            ))}
            
        </div>
    );

}