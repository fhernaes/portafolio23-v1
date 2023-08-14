'use client';
import { motion } from "framer-motion";
import Card from "../../components/card/card";

export default function Projects() {
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
    <div className="container">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="text-white"
      >
        <div className="row mt-3 justify-content-center">
          <h1 className="col-12 text-center mb-3">2023</h1>
          <div className="col-md-4 col-sm-12 mt-3 mb-4 d-flex justify-content-center">
            <Card
              title="Sumarte-api"
              text="Api construida con express para publicar servicios musicales."
              url="https://api-sm.onrender.com/"
              link="https://api-sm.onrender.com/"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
