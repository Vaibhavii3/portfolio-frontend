import React from "react";
import { motion } from "framer-motion";
import "../style/EducationPage.css";

const educationData = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "ABC University",
        year: "2018 - 2022",
    },
    {
        degree: "Higher Secondary Education",
        institution: "XYZ Senior Secondary School",
        year: "2016 - 2018",
    },
    {
        degree: "High School",
        institution: "LMN High School",
        year: "2014 - 2016",
    },
];


const EducationPage = () => {
    return (

        <div className="Education-container">
        <h1 className="Education-title">My Education</h1>
        <div className="Education-list">
            {educationData.map((item, index) => (
                <React.Fragment key={index}>
                    <motion.div
                        className="Education-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="Education-degree">{item.degree}</h2>
                        <h3 className="Education-institution">{item.institution}</h3>
                        <p className="Education-year">{item.year}</p>
                    </motion.div>
                    {index < educationData.length - 1 && (
                        <div className="Education-line"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
    );
};

export default EducationPage;