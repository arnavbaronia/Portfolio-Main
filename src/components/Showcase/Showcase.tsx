import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./Showcase.scss";

export default function Showcase() {
  const [state] = useContext(store);

  return (
    <div className="container-showcase">
      <div className="showcase-left">
        <motion.h3
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          {state.language === "english" ? "Explore My Work & Projects" : "Explore My Work & Projects"}
        </motion.h3>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          {state.language === "english" 
            ? "Dive into my portfolio to see a blend of detailed design and advanced development. From innovative web applications to impactful projects, explore how my skills can bring your ideas to life." 
            : "Dive into my portfolio to see a blend of detailed design and advanced development. From innovative web applications to impactful projects, explore how my skills can bring your ideas to life."
          }
        </motion.p>
      </div>

      <div className="showcase-right">
        <img
          className="screen"
          src={require("../../assets/images/screen5.png")}
          alt="Showcase of work"
        />
        <iframe
          className="video"
          src="https://streamable.com/e/1ehwwr?autoplay=1&nocontrols=1"
          style={{ border: "none", borderRadius: "2px" }}
          allow="autoplay"
          title="Project Showcase Video"
        ></iframe>
      </div>
    </div>
  );
}
