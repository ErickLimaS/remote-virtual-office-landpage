"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

function SignUpButton() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  return (
    <motion.button
      className="bg-black text-white font-black max-sm:text-xs max-lg:text-sm py-4 px-6 sm:max-lg:px-4 rounded-xl"
      onClick={() => setIsButtonClicked(!isButtonClicked)}
      data-active={isButtonClicked}
      whileTap={{ scale: 0.9 }}
    >
      SIGN UP FOR FREE
    </motion.button>
  );
}

export default SignUpButton;
