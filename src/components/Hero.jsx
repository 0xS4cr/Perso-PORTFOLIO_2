import { motion } from "framer-motion";
import { StarsCanvas } from "../components";
import { styles } from "../styles";
import { ModelCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <ModelCanvas />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 unselectable`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            FRONT AND CREATIV <br className='sm:block hidden' /> <span className='text-[#752eb3]'>Développeur</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            <br className='sm:block hidden' />
            "Clément, développeur web et d'applications,<br className='sm:block hidden' />  s'adaptant à diverses technologies<br className='sm:block hidden' /> pour forger des solutions <br className='sm:block hidden' />qui répondent aux attentes de mes clients."
          </p>
          <div className={`${styles.heroSubText} mt-20`}>
            <ul className="flex">
              <li className="mr-10">
                <a href="https://github.com/0xS4cr" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="mr-10">
                <a href="https://codepen.io/0xS4cr" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <i className="fab fa-codepen"></i>
                </a>
              </li>
              <li className="mr-10">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:s4cr@icloud.com" className="cursor-pointer">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <StarsCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-3'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
