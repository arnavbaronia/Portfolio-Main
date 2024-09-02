import React, { useContext, useEffect } from "react";
import { store } from "../../App";
import Image from "../Image/Image";
import { motion } from "framer-motion";
import "./EndCards.scss";

const EndCards: React.FC = () => {
  const [state] = useContext(store);

  return (
    <div className="certifications-section">
      {/* Heading */}
      <motion.h3
        className={`start eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        {state.language === "english" ? "Certifications" : "Zertifikate"}
      </motion.h3>
      <motion.h1
        className={`heading start ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
      >
        {state.language === "english" ? "My Credentials & Accomplishments" : "Meine Zeugnisse & Leistungen"}
      </motion.h1>

      {/* Certifications Container */}
      <div className={`cert-container card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <div className="cert-icons">
          <motion.div
            className="cert-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.3 }}
          >
            <Image source="aws" name="" />
            <p>AWS Certified Cloud Practitioner</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.4 }}
          >
            <Image source="postman" name="" />
            <p>Postman API Fundamentals Student Expert</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.5 }}
          >
            <Image source="forage" name="" />
            <p>Forage Software Engineering Job Simulation</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.6 }}
          >
            <Image source="udemy" name="" />
            <p>React-The Complete Guide 2024</p>
          </motion.div>
          <motion.div
            className="cert-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.7 }}
          >
            <Image source="udemy" name="" />
            <p>Full Stack Web Development</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EndCards;
