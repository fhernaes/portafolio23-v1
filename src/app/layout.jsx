'use client';
import { motion } from "framer-motion";
import Navigation from "../components/navigation/navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export default function RootLayout({ children }) {
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
    <html lang="es">
      <body>
        <Navigation />
        <motion.div
          className="container mt-3"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.div>
      </body>
    </html>
  )
}
