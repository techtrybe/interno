import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const LINKS_ARR = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 h-[100px] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <img src="/assets/logo.png" alt="interno" />
        </Link>

        <div className="items-center gap-[31px] justify-end hidden md:flex">
          {LINKS_ARR.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="hover:bg-gray-100 focus:bg-gray-200 py-1 px-2 rounded-md "
            >
              <span>{item.title}</span>
            </Link>
          ))}

          <button>
            <img src="/assets/search-icon.svg" alt="Search" />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-primary rounded-sm flex md:hidden ring-primary"
        >
          {menuOpen ? (
            <XMarkIcon className="w-8 h-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
      <AnimatePresence>{menuOpen && <MobileMenu />}</AnimatePresence>
    </nav>
  );
};

function MobileMenu() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      className="w-full origin-top-right bg-white shadow-sm h-fit z-40 p-4 absolute top-[100px] left-0"
    >
      <div className="flex flex-col items-start ">
        {LINKS_ARR.map((item, index) => (
          <Link key={index} href={item.url} className="w-full p-3">
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
