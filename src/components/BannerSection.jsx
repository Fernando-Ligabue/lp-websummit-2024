import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <motion.section className="relative w-full min-h-[450px] flex flex-col justify-center items-center py-20  bg-cover bg-center"
    style={{
        backgroundImage: "url(./bg-blue.webp)"
      }}
    >
      <motion.h2
        className="relative w-full text-4xl sm:text-7xl text-center text-porto-500 font-customBold font-bold"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        THE <em>FUTURE</em> STARTS HERE.
      </motion.h2>
    </motion.section>
  );
};

export default BannerSection;
