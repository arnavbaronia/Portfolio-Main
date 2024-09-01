import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './Experience.scss';

export default function Experience() {
  const [state] = useContext(store);

  const experiences = [
    {
      role: "SDE Intern",
      company: "Bluestock Fintech",
      date: "Jul 2024 - Aug 2024",
      details: [
        "Co-led the project and managed the frontend team in the development of an IPO web application and REST API, delivering seamless access to IPO-related data for over 5,000 users.",
        "Enhanced code quality and security by implementing rigorous testing and adhering to project deadlines, achieving a 20% reduction in post-launch issues."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "NutrieDiet",
      date: "May 2024 - Jul 2024",
      details: [
        "Engineered a comprehensive platform with around 500+ active users using React, elevating the efficiency of dietitians and nutritionists, contributing to an increase in client engagement.",
        "Integrated advanced features such as client management, weekly diet plans, and appointment scheduling, significantly streamlining operational workflows."
      ]
    },
    {
      role: "Web Development Intern",
      company: "GAOTek Inc.",
      date: "Jan 2024 - Apr 2024",
      details: [
        "Collaborated with a team to build a finance solutions website, successfully delivering a functional platform to stakeholders within a tight 3-month deadline.",
        "Improved site SEO by 15% through optimization strategies and the implementation of Google Analytics and Google Tag Manager."
      ]
    },
    {
      role: "Internship Trainee",
      company: "ETHNUS",
      date: "Aug 2023 - Nov 2023",
      details: [
        "Gained hands-on experience with the MERN stack while contributing to the development of a healthcare appointment booking website, enhancing team productivity."
      ]
    }
  ];

  return (
    <div className={`container-experience ${state.darkmode ? "dark-bg-2" : "light-bg-2"}`}>
      <div className="anchor" id="experience" />
      <motion.h3 className={`start eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {state.language === "english" ? "Experience" : "Erfahrung"}
      </motion.h3>
      <motion.h1 className={`heading start ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {state.language === "english" ? "My Professional Journey" : "Mein beruflicher Werdegang"}
      </motion.h1>

      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`experience-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ opacity: 0, y: 150 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.1 }}
          >
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-date">{exp.date}</p>
            <ul className="experience-details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
