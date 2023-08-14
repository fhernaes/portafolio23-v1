'use client';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./navigation.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar shadow">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Fhernaes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isOpen ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active fw-bold ms-5">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className="nav-link active fw-bold ms-5">
                  PROYECTOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`container mt-3${isOpen ? "" : " invisible-on-mobile"}`}
      >
      </motion.div>
    </div>
  );
};

export default Navigation;