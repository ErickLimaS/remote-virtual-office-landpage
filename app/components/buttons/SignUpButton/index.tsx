"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useId, useState } from "react";
import LoginSignUpModal from "../../LoginSignUpModal";

function SignUpButton({
  centerModalPosition,
  modalPosition,
}: {
  modalPosition: "left" | "right";
  centerModalPosition?: boolean;
}) {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const uniqueId = useId();

  return (
    <div className="relative">
      <motion.button
        layoutId={uniqueId}
        className="bg-black text-white font-black max-sm:text-xs max-lg:text-sm py-4 px-6 sm:max-lg:px-4 rounded-xl"
        onClick={() => setShowLoginModal(!showLoginModal)}
        data-active={showLoginModal}
        whileTap={{ scale: 0.9 }}
      >
        SIGN UP FOR FREE
      </motion.button>

      <AnimatePresence>
        {showLoginModal && (
          <LoginSignUpModal
            layoutId={uniqueId}
            closeModalHookState={() => setShowLoginModal(!showLoginModal)}
            centerModalPosition={centerModalPosition}
            modalPosition={modalPosition}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SignUpButton;
