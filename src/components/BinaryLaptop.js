import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LaptopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LaptopBody = styled(motion.div)`
  width: 200px; /* Reduced size */
  height: 140px; /* Reduced size */
  background: #8a2be2;
  border-radius: 8px 8px 0 0; /* Smaller border radius */
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const LaptopScreen = styled(motion.div)`
  width: 90%;
  height: 60%;
  background: linear-gradient(135deg, #9d4edd, #7b2cbf);
  border-radius: 8px;
  position: absolute;
  top: 10%;
  left: 5%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const LaptopBase = styled(motion.div)`
  width: 220px; /* Reduced size */
  height: 15px; /* Reduced size */
  background: #6a1b9a;
  border-radius: 0 0 8px 8px;
  position: relative;
  top: -2px;
  margin-left: -10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const Keyboard = styled(motion.div)`
  width: 80%;
  height: 10%;
  background: #4a148c;
  border-radius: 4px;
  position: absolute;
  top: 65%;
  left: 10%;
`;

const TouchPad = styled(motion.div)`
  width: 25%;
  height: 8%;
  background: #311b92;
  border-radius: 4px;
  position: absolute;
  top: 80%;
  left: 37.5%;
`;

const AnimatedLaptop = () => {
  const disassembleVariants = {
    hover: {
      scale: 1.2,
      opacity: 1,
      y: [-10, 10, -5],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    normal: {
      y: 0,
      rotate: 0,
    },
  };

  return (
    <LaptopWrapper>
      <LaptopBody
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          y: -30,
          rotate: 3,
          transition: { duration: 0.5 },
        }}
      >
        <LaptopScreen
          variants={disassembleVariants}
          whileHover="hover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <Keyboard
          variants={disassembleVariants}
          whileHover="hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
        <TouchPad
          variants={disassembleVariants}
          whileHover="hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </LaptopBody>
      <LaptopBase
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{
          y: 10,
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      />
    </LaptopWrapper>
  );
};

export default AnimatedLaptop;
