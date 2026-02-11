// components/StatsSection.jsx
export default function Siffror() {
  const stats = [
    {
      number: "95%",
      text: "Använder sociala medier dagligen",
    },
    {
      number: "70%",
      text: "Av kunder litar mer på företag med en stark digital närvaro",
    },
    {
      number: "8,7",
      text: "Miljoner användare att nå ut till via Meta-plattformar i Sverige",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className=" text-[#E95D0F]">
              {stat.number}
            </h2>
            <p className="mt-2 text-lg ">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
