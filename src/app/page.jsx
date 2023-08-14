'use client'
import { motion } from "framer-motion";
import "./page.css"


export default function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="text-white text-center"
      >
        <div className="info text-center mt-5">
          <h2 className="display-3 fw-bold">Fernando Hernández</h2>
          <h3 className="display-4">Desarrollador Web</h3>
        </div>
      </motion.div>
    </div>
  );
}

