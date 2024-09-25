import React, { useEffect, useState } from 'react';
import freelanceImage from '../assets/freelance.png';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Memperpanjang durasi untuk efek lebih halus
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto py-4 container flex flex-col md:flex-row justify-center gap-5 items-start md:px-32 lg:h-screen mt-5 md:mb-0 bg-transparent"
    >
      <div className="w-full px-5">
        <motion.h3
          variants={fadeInUp}
          className="lg:text-3xl font-bold lg:mb-3 text-2xl"
        >
          Hello, it's Me
        </motion.h3>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl lg:text-5xl text-rose-600 font-bold mb-2"
        >
          <Typewriter 
            words={['Rul Freelancer']}
            loop={0}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> 
          <Cursor />
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-justify"
        >
          Freelancer skilled in handling web company profiles, photo, video editing, and copywriting. 
          Committed to delivering high-quality work tailored to meet client needs.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-5 flex gap-3"
        >
          <a href="https://github.com/Syahrul14">
            <div className="bg-gradient-to-r from-black to-sky-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
            </div>
          </a>
          <div className="bg-gradient-to-r from-blue-600 to-sky-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
          </div>
          <a href="https://www.instagram.com/syahrul_rizal14?igsh=MXZnNDM4bnEwb2Y1dw==">
            <div className="bg-gradient-to-r from-red-600 to-rose-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </div>
          </a>
        </motion.div>

        <motion.a
          variants={fadeInUp}
          href="http://t.me/RulFreelancer"
        >
          <button className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-500 duration-300 text-white font-bold py-2 px-4 mt-5 rounded-full">
            Contact Me
          </button>
        </motion.a>
      </div>

      <motion.div
        variants={fadeInUp}
        className="w-full text-center"
      >
        <img src={freelanceImage} alt="" />
      </motion.div>
    </motion.div>
  );
}

export default Banner;