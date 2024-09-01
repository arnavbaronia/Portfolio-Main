import React, { useContext, useEffect } from "react";
import { store } from "../../App";
import Image from "../Image/Image";
import { motion, useAnimation } from "framer-motion";
import "./EndCards.scss";

const EndCards: React.FC = () => {
  const [state] = useContext(store);
  const containerControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    // Animate the container when the component mounts
    containerControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.4, delay: 0.3 }
    });

    // Animate the items with a stagger effect
    itemControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4, staggerChildren: 0.1 }
    });
  }, [containerControls, itemControls]);

  return (
    <div className="certifications-section">
      {/* Heading */}
      <motion.h3
        className={`start eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        {state.language === "english" ? "Certifications" : "Zertifikate"}
      </motion.h3>
      <motion.h1
        className={`heading start ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
      >
        {state.language === "english" ? "My Credentials & Accomplishments" : "Meine Zeugnisse & Leistungen"}
      </motion.h1>

      {/* Certifications Container */}
      <motion.div
        className={`cert-container card ${state.darkmode ? "dark-card" : "light-card"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={containerControls}
        viewport={{ once: true }}
      >
        <div className="cert-icons">
          <motion.div
            className="cert-item"
            initial={{ opacity: 0, y: 50 }}
            animate={itemControls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image source="aws" name="" />
            <p>AWS Certified Cloud Practitioner</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ opacity: 0, y: 50 }}
            animate={itemControls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image source="postman" name="" />
            <p>Postman API Fundamentals Student Expert</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ opacity: 0, y: 50 }}
            animate={itemControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image source="forage" name="" />
            <p>Forage Software Engineering Job Simulation</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ opacity: 0, y: 50 }}
            animate={itemControls}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Image source="udemy" name="" />
            <p>React-The Complete Guide 2024</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ opacity: 0, y: 50 }}
            animate={itemControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image source="udemy" name="" />
            <p>Full Stack Web Development</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EndCards;
