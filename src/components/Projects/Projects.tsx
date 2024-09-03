import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import playAudio from "../../utils/Helpers/playAudio";
import "./Projects.scss";

export default function Projects() {
  const [state] = useContext(store);

  const containerClass = state.darkmode ? "dark-card" : "light-card";

  return (
    <div className={`projects-container ${containerClass}`}>
      <div className="anchor" id="portfolio" />
      <motion.h3
        className={`eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english" ? "Projects" : "Projects"}
      </motion.h3>
      <motion.h1
        className={`heading ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english"
          ? "A small preview of my projects."
          : "A small preview of my projects."}
      </motion.h1>

      <div className="project-list">
        <a
          href="github.com"
          className="project-link"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <motion.div
            className={`skill-tab-container ${containerClass}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="project-preview"
              src={require("../../assets/images/Nutriediet_Logo_Transparent-removebg-preview.png")}
              alt="NutrieDiet Project"
            />
          </motion.div>
        </a>

        <a
          href="github.com"
          className="project-link"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <motion.div
            className={`skill-tab-container ${containerClass}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="project-preview"
              src={require(`../../assets/images/${state.darkmode ? "ShopVista-logos_white.png" : "invoice-logo.png"}`)}
              alt="ShopVista Project"
            />
          </motion.div>
        </a>

        <a
          href="github.com"
          className="project-link"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <motion.div
            className={`skill-tab-container ${containerClass}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="project-preview"
              src={require("../../assets/images/portfolio.png")}
              alt="Portfolio Project"
            />
          </motion.div>
        </a>
      </div>

      <a
        href="https://github.com/arnavbaronia"
        target="_blank"
        className="more-button"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Show More" : "Show More"}
      </a>
    </div>
  );
}
