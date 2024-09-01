import React, { useContext } from 'react';
import './Manifest.scss';
import { motion } from "framer-motion";
import { store } from '../../App';

export default function Manifest() {
  const [state] = useContext(store);

  return (
    <div className={`container-manifest ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
        <motion.a 
          className="manifest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
            <h1>
              {state.language === "english" 
                ? "Innovative Full Stack Developer committed to creating impactful and efficient solutions!"
                : "Innovative Full Stack Developer committed to creating impactful and efficient solutions!"}
            </h1>
        </motion.a>
    </div>
  );
}
