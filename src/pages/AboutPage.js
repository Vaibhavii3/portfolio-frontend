import React from "react";
import { useNavigate } from "react-router-dom";
import BinaryLaptop from "../components/BinaryLaptop";
import { motion } from 'framer-motion';


import "../style/About.css";
// import "../App.css";

const AboutPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/photo");
  }

  const containerVariants = {
    hidden: {opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

//   const folderVariants = {
//     hidden: { opacity: 0, scale: 0.9,},
//     visible: {
//         opacity: 1,
//         scale: 1,
        
//         transition: { 
//             type: "spring",
//             stiffness: 60,
//             damping: 15,
//             duration: 1, },
//     },
// };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};




    return (
        <div className="hello">
          {/* <h1>Hey! I'm Vaibhavi </h1> */}

          <BinaryLaptop className="laptop" />

          {/* <p>
            I'm a passionate developer who creates interactive and responsive web
            applications!
          </p> */}

          {/* who im  */}
         <motion.div  className= "com-wrapper" variants={ containerVariants}
         initial="hidden"
         animate="visible"
         >

          {/* about me  */}
          <motion.div 
           className="me"
            variants={itemVariants}
            // transition={{ type: 'spring', stiffness: 300}}
          >
            <h3>About Me </h3>
            <h4>
              Hello! I'm Vaibhavi, a developer with a passion for both technology and the wonders of the cosmos. I have a deep love for exploring the universe, studying its mysteries, and understanding our place in it. My curiosity extends beyond just coding - I'm driven by the desire to balance technology with nature and spirituality.
           </h4>
          </motion.div>

          {/* photo components  */}
          <motion.div 
           className="photography"
           onClick={handleClick}
            variants={itemVariants}
            // transition={{ type: 'spring', stiffness: 300}}
          >
            <h3> I do <span>photography</span> often!</h3>
            <h4> If you want to see some Photos, click here </h4>
          </motion.div>

          <motion.div 
           className="me"
            variants={itemVariants}
            // transition={{ type: 'spring', stiffness: 300}}
          >
            <h3>About Me </h3>
            <h4>
              Hello! I'm Vaibhavi, a developer with a passion for both technology and the wonders of the cosmos. I have a deep love for exploring the universe, studying its mysteries, and understanding our place in it. 
           </h4>
          </motion.div>

          <motion.div 
           className="me"
            variants={itemVariants}
            // transition={{ type: 'spring', stiffness: 300}}
          >
            <h3>About Me </h3>
            <h4>
              Hello! I'm Vaibhavi, a developer with a passion for both technology and the wonders of the cosmos. I have a deep love for exploring the universe, studying its mysteries, and understanding our place in it. My curiosity extends
           </h4>
          </motion.div>

          </motion.div>
          </div>
      );
};

export default AboutPage;