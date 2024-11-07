// import { motion } from "framer-motion";

// const VideoSection = () => {
//   return (
//     <motion.section
//       id="video"
//       className="relative w-full h-full flex flex-col justify-start items-start pb-20"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//     >
//       <div
//         className="w-full lg:min-h-screen h-96"
//       > video será inserido aqui</div>
//       {/* <iframe
//         className="w-full lg:min-h-screen h-96"
//         src="https://www.youtube.com/embed/90RLzVUuXe4?si=M0c5_PGNfNZZO2Rf"
//       ></iframe> */}
//     </motion.section>
//   );
// };

// export default VideoSection;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import slide1 from "../assets/slide-1.webp";
import slide2 from "../assets/slide-2.webp";
import slide3 from "../assets/slide-3.webp";
import slide4 from "../assets/slide-4.webp";
import slide5 from "../assets/slide-5.webp";
import slide6 from "../assets/slide-6.webp";
import slide7 from "../assets/slide-7.webp";
import slide8 from "../assets/slide-8.webp";

const VideoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <motion.section
      id="video"
      className="relative w-full h-80 sm:h-screen flex flex-col justify-start items-start pb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full min-h-screen">
        {/* Carousel */}
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative min-h-96 overflow-hidden md:h-screen">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={slide}
                  className="block w-full h-full object-cover object-center"
                  alt={`Slide ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
