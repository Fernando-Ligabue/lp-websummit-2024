/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import Circle from "../assets/circle.webp";
import { useEffect, useState } from "react";
const Hero = () => {
  const messages = [
    { id: 1, before: "The ", highlight: "future", after: " is calling" },
    { id: 2, before: "The ", highlight: "future", after: " is yours" },
    { id: 3, before: "The ", highlight: "future", after: " is ours" },
    { id: 4, before: "The ", highlight: "future", after: " is here" },
  ];

  const [currentText, setCurrentText] = useState({
    before: "",
    highlight: "",
    after: "",
  });
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    const handleTyping = () => {
      const { before, highlight, after } = messages[currentMessageIndex];
      const fullText = before + highlight + after;

      if (!isDeleting) {
        if (
          (currentText.before + currentText.highlight + currentText.after)
            .length < fullText.length
        ) {
          const nextText = fullText.slice(
            0,
            (currentText.before + currentText.highlight + currentText.after)
              .length + 1
          );
          setCurrentText({
            before: nextText.slice(0, before.length),
            highlight: nextText.slice(
              before.length,
              before.length + highlight.length
            ),
            after: nextText.slice(before.length + highlight.length),
          });
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.after) {
          setCurrentText((prev) => ({
            ...prev,
            after: prev.after.slice(0, -1),
          }));
        } else if (currentText.highlight) {
          setCurrentText((prev) => ({
            ...prev,
            highlight: prev.highlight.slice(0, -1),
          }));
        } else if (currentText.before) {
          setCurrentText((prev) => ({
            ...prev,
            before: prev.before.slice(0, -1),
          }));
        } else {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [currentText, currentMessageIndex, isDeleting, messages]);

  return (
    <section className="w-full h-[75vh] sm:h-[85vh] flex justify-center items-center gap-6">
      <div className="w-full max-w-[1140px] flex flex-col justify-between items-center gap-6">
        <div className="relative w-full flex justify-center items-center">
          <img src={Circle} alt="Logo" className="w-full px-2 sm:px-0 max-w-[485px]" />
          <h1 className="absolute top-1/2 transform -translate-y-1/2 min-h-8 max-w-[300px] sm:max-w-[580px] text-5xl sm:text-8xl uppercase text-center font-extrabold font-customBold text-porto-500">
            {currentText.before}
            <em>{currentText.highlight}</em>
            {currentText.after}
            <span className="animate-pulse !font-medium font-custom text-porto-500">
              |
            </span>
          </h1>
        </div>
        <motion.h4
          className="text-3xl font-inter text-center text-porto-500 mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          #Future<strong>IsPorto.</strong>
        </motion.h4>
      </div>
    </section>
  );
};

export default Hero;
