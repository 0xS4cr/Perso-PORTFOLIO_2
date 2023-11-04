import React from "react";
import { motion } from "framer-motion";
import {StarsCanvas } from "../components";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
     
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Who i am ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde pariatur illo ipsam, amet corrupti accusantium debitis beatae facere quibusdam quis error nihil repellendus sed laudantium fugiat dicta aliquid facilis?
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
