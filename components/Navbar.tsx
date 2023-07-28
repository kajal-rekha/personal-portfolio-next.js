"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 bg-accant backdrop-blur-lg border-b border-dark/10 z-[100]">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={getTransition(0.6)}
        className="wrapper w-full h-full flex justify-between items-center"
      >
        {/* NAV LEFT */}
        <nav>
          <Link
            href="/"
            className="text-xl text-gray-200 font-semibold link-item tracking-widest"
          >
            KAJAL REKHA
          </Link>
        </nav>

        {/* NAV MID */}
        <nav>
          <ul className="flex gap-5 text-gray-200">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="link-item">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="link-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* NAV RIGHT */}
        <nav>
          <Link
            href="https://drive.google.com/file/d/1KPUBmVB2oittzCcTlb_9V4Y9_6C8gYJh/view?usp=drive_link"
            className="link-item text-gray-200"
          >
            Resume
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
