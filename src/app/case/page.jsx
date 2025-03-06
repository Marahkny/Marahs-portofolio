import Image from 'next/image';

export default function About() {
    const cards = Array(4).fill({
        title: "Techno",
        category: "UI/UX Design",
        tag: "Brand",
        image: "/photos/project 2.png",
    });

    return (
        <>
            <section className="text-[#F5F5F5] h-full pt-20 pb-10 px-6">
                <div className="max-w-8xl mx-auto text-left">
                    <h1 className="mb-6">Some of our cases</h1>
                    <p>We continuously update our cases. Reach out for a digital fika to pitch your idea!</p>
                </div>
            </section>

            <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2 gap-6 p-6">
                {cards.map((card, index) => (
                    <div key={index} className="rounded-[20px] overflow-hidden py-4">
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-[20px]"
                        />
                        <div className="py-6">
                            <h2 className="text-[24px] pb-2 font-semibold">{card.title}</h2>
                            <p className="text-gray-300 text-sm">
                                {card.category} <span className=" text-gray-300 pl-4">{card.tag}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}




