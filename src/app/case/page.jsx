"use client";
import Link from "next/link";
import Image from 'next/image';
import { LiaArrowRightSolid } from "react-icons/lia";
import Zone90Section from "../Home/zone90secation";
export default function About() {
    const cards = [
        {
            title: "Techno",
            category: "Brand & UI/UX Design",
            image: "/photos/project 2.png",
            link:"/techno",
        },
        {
            title: "Framsteg förening",
            category: "WordPress Website & Brand",
            image: "/photos/project 1.png",
            link: "/framsteg",
        }
    ];

    return (
        <>
            <section className="text-[#F5F5F5] h-full pt-20 pb-10 px-6">
                <div className="max-w-8xl mx-auto text-left">
                    <h1 className="mb-6">Some of our cases</h1>
                    <p>We continuously update our cases. Reach out for a digital fika to pitch your idea!</p>
                </div>
            </section>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-6">
                {cards.map((card, index) => (
                    <div key={index} className="rounded-[20px] overflow-hidden py-4">
                          <Link className="group" href={card.link}> 
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-[20px] group-hover:border group-hover:border-[#3B429F]"
                        /> 
                        
                        <div className="py-6">
                        <h2 className="text-[24px] pb-2 font-semibold">{card.title}</h2>
                        <div className="flex items-center justify-between w-full  pr-2 group cursor-pointer">
    <p className="text-[16px] text-gray-300">{card.category}</p>
    <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform duration-300 group-hover:translate-x-2" />
</div>

                     
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Zone90Section/>
        </>
    );
}





