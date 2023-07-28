"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  return (
    <div>
      <div className="sm:w-full navbar h-20 fixed top-0 left-0 right-0 shadow-lg flex bg-accant">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={getTransition(0.6)}
          className="wrapper flex justify-between items-center"
        >
          <div className="logo">
            <Link
              href="/"
              className="text-white text-lg font-semibold uppercase link-item"
            >
              Kajal Rekha
            </Link>
          </div>

          <div className="hidden md:block">
            <div
              className="flex gap-5 justify-between text-white"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <Link href="/" className="link-item">
                Home
              </Link>
              <Link href="/projects" className="link-item">
                Projects
              </Link>

              <Link href="/skills" className="link-item">
                Skills
              </Link>

              <Link href="/about" className="link-item">
                About
              </Link>

              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </div>
          </div>
          <div
            className="hidden md:block text-white font-medium"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Link
              href="https://drive.google.com/file/d/1KPUBmVB2oittzCcTlb_9V4Y9_6C8gYJh/view?usp=drive_link"
              className="resume link-item"
            >
              View Resume
            </Link>
          </div>

          {/*toggle button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center focus:outline-none text-xl text-white z-[99]"
            >
              {toggle === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* mobile menu */}
      <div>
        {toggle ? (
          <div className="md:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[98] bg-slate-950 top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                setToggle ? `` : "hidden"
              }`}
            >
              <div>
                <div className="flex flex-col gap-5 items-center mb-10">
                  <Link href="/">Home</Link>
                  <Link href="/projects">Projects</Link>

                  <Link href="/skills">Skills</Link>
                  <Link href="/about">About</Link>

                  <Link href="/contact">Contact</Link>
                </div>

                <Link href="https://drive.google.com/file/d/1knbRijme6r34D5vzKZbxV0PLugGKBHrL/view?usp=drive_link">
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
