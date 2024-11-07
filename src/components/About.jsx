import { motion } from "framer-motion";
import Lifestyle from "../assets/lifestyle.webp";
import Sustain from "../assets/sustain.webp";
import Economy from "../assets/economy.webp";
import Connectivity from "../assets/connectivity.webp";
import Talent from "../assets/talent.webp";
import Hub from "../assets/in-hub.webp";
import LifestyleHover from "../assets/hover-lifestyle.webp";
import SustainHover from "../assets/hover-sustain.webp";
import EconomyHover from "../assets/hover-economy.webp";
import ConnectivityHover from "../assets/hover-connectivity.webp";
import TalentHover from "../assets/hover-talent.webp";
import HubHover from "../assets/hover-hub.webp";
import { ArrowDown } from "lucide-react";

const About = () => {
  const segments = [
    {
      id: 1,
      icon: Lifestyle,
      hoverIcon: LifestyleHover,
      link: "https://investporto.pt/en/why-porto/great-lifestyle/",
      title: "Great Lifestyle",
    },
    {
      id: 2,
      icon: Sustain,
      hoverIcon: SustainHover,
      link: "https://investporto.pt/en/why-porto/sustainable-city/",
      title: "Sustainable City",
    },
    {
      id: 3,
      icon: Economy,
      hoverIcon: EconomyHover,
      link: "https://investporto.pt/en/why-porto/competitive-economy/",
      title: "Competitive Economy",
    },
    {
      id: 4,
      icon: Connectivity,
      hoverIcon: ConnectivityHover,
      link: "https://investporto.pt/en/why-porto/global-connectivity/",
      title: "Global Connectivity",
    },
    {
      id: 5,
      icon: Talent,
      hoverIcon: TalentHover,
      link: "https://investporto.pt/en/why-porto/talent-community/",
      title: "Talent Community ",
    },
    {
      id: 6,
      icon: Hub,
      hoverIcon: HubHover,
      link: "https://investporto.pt/en/why-porto/innovation-hub/",
      title: "Innovation Hub",
    },
  ];

  return (
    <motion.section
      className="relative w-full min-h-screen flex flex-col justify-center items-center mt-0 sm:mt-28 pb-36 bg-gradient-custom"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="w-full max-w-[1140px] flex flex-col justify-center items-center mx-auto px-6 py-4">
        <motion.h2
          className="w-full text-4xl sm:text-8xl text-left text-porto-500 font-customBold font-bold mb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          WHY Porto <span className="font-medium">?</span>
        </motion.h2>
        <div className="w-full flex flex-col justify-start items-center mx-auto gap-6">
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Porto has established itself as Portugal&apos;s business centre,
            accommodating many of the country&apos;s main industries in its
            metropolitan area. With a population of approximately 1.7 million
            people, the Porto metropolitan area is the second largest urban area
            in the country and a fast-growing hub for knowledge and digital
            business in Europe.
          </motion.p>
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Considered the economic capital of Northern Portugal and the Iberian
            Peninsula Northwest, Porto is ranked as the 3rd best
            English-speaking city in the world, recognised as the best major
            city for foreign investment and stands out as the 7th most
            attractive destination globally for digital nomads. Porto keeps
            attracting and retaining talent, thanks in large part to our city&apos;s
            investment in education and talent.
          </motion.p>
          <motion.p
            className="font-inter text-porto-500 text-2xl text-left w-full"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find the top reasons to choose Porto.
          </motion.p>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mt-10 cursor-pointer">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="w-full flex flex-col justify-center items-center gap-4 my-4 sm:my-8"
            >
              <a href={segment.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full sm:max-w-[200px] max-w-[120px] h-auto">
                  <img
                    src={segment.icon}
                    alt={segment.title}
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-0"
                  />
                  <img
                    src={segment.hoverIcon}
                    alt={`${segment.title} Hover`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100"
                  />
                </div>
              </a>
              <p className="font-customBoldItalic text-porto-500 sm:text-2xl text-center w-full mt-4">
                {segment.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ArrowDown
        className="text-porto-500 absolute bottom-10 font-custom animate-bounce"
        size={36}
      />
    </motion.section>
  );
};

export default About;
