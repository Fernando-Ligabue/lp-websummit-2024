import { motion } from "framer-motion";
import Visit from "../assets/visit-porto.webp";
import Invest from "../assets/invest-porto.webp";
import Scaled from "../assets/scaled-porto.webp";
import Tera from "../assets/tera.webp";
import Leme from "../assets/leme.webp";
import About from "../assets/about-porto.webp";

const Ecosystem = () => {
  const sectors = [
    {
      id: 1,
      icon: Visit,
      link: "https://visitporto.travel/pt-PT",
      title: "Visit Porto",
    },
    {
      id: 2,
      icon: Invest,
      link: "https://www.investporto.pt/en/",
      title: "InvestPorto",
    },
    {
      id: 3,
      icon: Scaled,
      link: "https://scaleupporto.pt/",
      title: "ScaleUp Porto",
    },
    {
      id: 4,
      icon: Tera,
      link: "https://portofortalent.com/",
      title: "Tera",
    },
    {
      id: 5,
      icon: Leme,
      link: "https://leme.porto.pt/pt",
      title: "Leme",
    },
    {
      id: 6,
      icon: About,
      link: "https://www.porto.pt/en",
      title: "All About Porto",
    },
  ];

  return (
    <motion.section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-[1140px] flex flex-col justify-center items-center mx-auto px-6 py-4">
        <motion.h2
          className="w-full text-4xl sm:text-5xl text-center text-porto-500 font-customBold font-bold mb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Porto Ecosystem Projects
        </motion.h2>
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-10 cursor-pointer"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              className="w-full flex flex-col justify-center items-center gap-4 my-8"
            >
              <a href={sector.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sector.icon}
                  alt={sector.title}
                  className="w-full md:max-w-[400px] hover:animate-pulse"
                />
              </a>
              <p className="font-customBoldItalic text-porto-500 font-semibold text-2xl text-left w-full">
                {sector.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Ecosystem;
