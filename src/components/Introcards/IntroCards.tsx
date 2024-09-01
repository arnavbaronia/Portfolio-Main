import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards() {
  const [state] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>
          {state.language === "english" ? "Full Stack Developer with a Passion for Modern Technologies" : "Full Stack Developer with a Passion for Modern Technologies"}
        </h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
          {state.language === "english" ? 
            "From mastering C++, Java, and Python to specializing in web development with React.js and Node.js, I leverage a broad skill set to build innovative solutions. My expertise includes working with HTML, CSS, and JavaScript, as well as handling databases like MongoDB and MySQL. I'm proficient in Redux for state management, Express.js for server-side operations, and RESTful APIs for seamless integration." : 
            "From mastering C++, Java, and Python to specializing in web development with React.js and Node.js, I leverage a broad skill set to build innovative solutions. My expertise includes working with HTML, CSS, and JavaScript, as well as handling databases like MongoDB and MySQL. I'm proficient in Redux for state management, Express.js for server-side operations, and RESTful APIs for seamless integration."
          }
        </p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div 
          className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num green">350</h2>
            <h2 className="sign green-sign">+</h2>
          </div>
          <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            {state.language === "english" ? "Problems Solved" : "Problems Solved"}
          </h4>
        </motion.div>

        <motion.div 
  className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
  initial={{ scale: 0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
>
  <div className="card-top">
    <h2 className="num green">5</h2>
    <h2 className="sign green-sign">+</h2>
  </div>
  <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
    {state.language === "english" ? "Projects" : "Projects"}
  </h4>
</motion.div>


        <motion.div 
          className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num purple">4</h2>
            <h2 className="sign purple-sign">+</h2>
          </div>
          <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            {state.language === "english" ? "Internships" : "Internships"}
          </h4>
        </motion.div>

        <motion.div 
          className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num red">100</h2>
            <h2 className="sign percent red-sign">%</h2>
          </div>
          <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            {state.language === "english" ? "Passion%" : "Passion%"}
          </h4>
        </motion.div>
      </section>
    </div>
  );
}
