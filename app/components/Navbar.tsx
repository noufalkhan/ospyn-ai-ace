'use client';
// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { HyperTextDemo } from "./elements/HyperText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  return (
    <nav className="bg-gradient-to-r from-black to-neutral-950 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
        <div><HyperTextDemo /></div>
        
        </Link>
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, color: "#E5E5E5" }} // Hover effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="md:hidden bg-gradient-to-r from-black to-neutral-950 text-white space-y-4 py-4 px-4"
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }} // Mobile hover effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
