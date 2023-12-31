import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {git} from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.55)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 950,
        }}
        className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[200px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={git}
                alt='source code'
                className='w-5/6 h-5/6 object-contain'
              />
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}text-[#752eb3]`}>Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black text-[19px] max-w-3xl leading-[30px]'
        >
          Voici une sélection de projets sur lesquels j'ai travaillé et qui ont été développés dans le cadre de ma formation avec OpenClassrooms, reflétant mon parcours d'apprentissage et mon engagement dans le développement de compétences en front-end
        </motion.p>
      </div>

      <div className='mt-25 pt-5 flex flex-wrap gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
