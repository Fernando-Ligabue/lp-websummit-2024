import { motion } from "framer-motion";
import BG from "../assets/bg-economic.webp";

const EconomicSection = () => {
  const messages = [
    {
      id: 1,
      link: "https://www.ef.com/wwen/epi/",
      number: "3",
      sup: "rd",
      highlight: "City with best English skills",
      text: "Southern Europe",
      smaller: "EF Education First, 2022",
    },
    {
      id: 2,
      link: "https://www.fdiintelligence.com/content/download/82064/2683542/file/fDi_0223_ECOF.pdf",
      number: "1",
      sup: "st",
      highlight: "Best large city for foreign investment",
      text: "Europe",
      smaller: "FT / fDi Intelligence, 2023",
    },
    {
        id: 3,
        link: "https://www.worldtravelawards.com/profile-34429-porto-tourism",
        number: "1",
        sup: "st",
        highlight: "Metropolitan Destination 2024 Europe's Leading City Break Destination 2023",
        text: "",
        smaller: "World Travel Awards",
      },
    {
      id: 4,
      link: "https://nomads.com/europe",
      number: "7",
      sup: "th",
      highlight: "Hottest destination for digital nomads",
      text: "Europe",
      smaller: "Nomad List, Feb/2023",
    },
    
  ];
  return (
    <motion.section className="relative w-full min-h-screen flex flex-col justify-start items-center py-20">
      <div className="w-full max-w-[1140px] flex flex-col justify-center items-center mx-auto px-6 py-4">
        <motion.h2
          className="w-full text-4xl sm:text-5xl text-center text-porto-500 font-customBold font-bold mb-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Porto: At the forefront of
          <br />
          Economic Transformation
        </motion.h2>
        <div className="w-full flex justify-center lg:justify-around items-center gap-10 flex-wrap my-8">
          {messages.map((message) => (
            <a href={message.link} target="_blank"
              key={message.id}
              className="w-full max-w-96 flex flex-col justify-between items-center lg:items-start gap-1"
            >
              <h4 className="font-custom text-porto-500 text-4xl text-center md:text-left">
                {message.number}
                <sup className="text-porto-500 font-thin">{message.sup}</sup>
              </h4>
              <p className="font-customBold text-porto-500 text-4xl text-center lg:text-left">
                {message.highlight}
              </p>
              <p className="font-custom text-porto-500 text-4xl">
                {message.text}
              </p>
              <small className="font-custom text-porto-500 text-lg">
                {message.smaller}
              </small>
            </a>
          ))}
        </div>
        <div className="w-full flex justify-center lg:justify-between items-center gap-10 flex-wrap my-8">
          <img src={BG} alt="Porto." />
        </div>
        <div className="w-full flex flex-col justify-start items-center mx-auto gap-6">
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discover this booming city that is positioning itself as a global
            destination of reference for entrepreneurs, investors, digital
            nomads and all those who want to thrive. Combining economic
            opportunities with an incomparable quality of life, Porto stands out
            as a true epicentre of innovation and sustainability.
          </motion.p>
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            In Porto you&apos;ll find the ideal environment to launch new
            projects, expand your business and be part of a lively community
            that&apos;s committed to the future. Be part of a city that not only
            follows global trends, but also leads the way, creating and driving
            opportunities for all those who choose to grow with it.
          </motion.p>
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Porto is waiting for you - the next big step for those who want to
            live, work and innovate in tune with the world.
          </motion.p>
          <a
            className="w-fit font-custom font-bold text-lg text-porto-500 hover:text-white hover:bg-porto-500 transition-all duration-300 border-4 px-4 py-3 pt-3 leading-4 rounded-[30px] border-porto-500 my-4"
            href="https://investporto.pt/en/why-porto/#discover_oportunities"
            target="_blank"
          >
            DISCOVER OPPORTUNITIES
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default EconomicSection;
