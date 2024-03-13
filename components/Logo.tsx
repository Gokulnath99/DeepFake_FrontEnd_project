"use client"

import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ x: -500,opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-extrabold"
    >
      A-LIVE
    </motion.div>
  );
};

export default Logo;
