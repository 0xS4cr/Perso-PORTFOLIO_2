import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>À propos.</p>
      </motion.div>

      <h2 className={styles.sectionHeadText}>Qui suis-je?</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        Je suis Clément, et mon parcours est celui d'une constante réinvention. Après un virage professionnel décisif, j'ai renoué avec mon premier amour : le développement web, avec une prédilection pour le front-end. À 36 ans, la créativité, le design, l'immersion et la conception d'interfaces utilisateurs ne sont pas seulement des compétences, mais des passions qui animent chaque projet.
      </motion.p>

      <h2 className={styles.sectionHeadText}>Mon Histoire</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        C'est chez OpenClassrooms que j'ai solidifié mes fondations en développement, complétant une formation rigoureuse par un travail acharné en autodidacte. J'ai tissé une toile de compétences diverses, allant de l'HTML au CSS, en passant par JavaScript, React, Redux et j'ai même exploré les profondeurs du Python.
      </motion.p>

      <h2 className={styles.sectionHeadText} >Ma Philosophie</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mb-8 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        Les lignes de code sont ma toile, où je peins des expériences utilisateurs uniques. Je jongle avec les langages de programmation, rêvant de dimensions en 3D et d'intelligence artificielle. Pour moi, le code n'est pas qu'une suite d'instructions, c'est le pinceau avec lequel je dessine des mondes.
      </motion.p>

      <h2 className={styles.sectionHeadText}>Ma Proposition</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        En tant que freelance, je mets ma polyvalence au service de vos projets, qu'il s'agisse de donner vie à des sites web ou de concevoir des applications sur-mesure qui captureront l'essence de votre entreprise. PME ou TPE, votre vision mérite une vitrine numérique qui vous ressemble.
      </motion.p>

      <h2 className={styles.sectionHeadText}>Mon Engagement</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        L'apprentissage est un voyage sans fin, et j'accueille chaque nouvelle technologie comme une opportunité. Je m'adapte rapidement, car pour moi, les langages de programmation sont des outils pour réaliser votre vision, et non des obstacles.
      </motion.p>

      <h2 className={styles.sectionHeadText}>Vous et Moi</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[19px] max-w-3xl leading-[30px]'
      >
        Collaborons pour créer des expériences qui vont au-delà du fonctionnel, où chaque interaction est un pas dans un univers où la technologie rime avec esthétique et performance.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
