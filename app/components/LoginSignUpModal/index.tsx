import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, MouseEventHandler, useId, useState } from "react";
import FormLabelInput from "./formLabelInput";

function LoginSignUpModal({
  layoutId,
  closeModalHookState,
  centerModalPosition,
  modalPosition,
}: {
  layoutId: string;
  closeModalHookState: MouseEventHandler<HTMLButtonElement>;
  modalPosition: "left" | "right";
  centerModalPosition?: boolean;
}) {
  const uniqueId = useId();

  const [formType, setFormType] = useState<"login" | "signup">("login");

  function submitForm(e: FormEvent) {
    e.preventDefault();

    console.log(e.target);
  }

  return (
    <motion.div
      layoutId={layoutId}
      role="dialog"
      aria-modal={true}
      aria-labelledby={uniqueId}
      className={
        "absolute -top-[16px] h-fit z-10 w-full min-w-[300px] sm:w-[300px]" +
        (modalPosition == "left" ? " left-0" : " right-0") +
        (centerModalPosition == true ? " -translate-x-1/4" : " ")
      }
    >
      <div
        className={
          "py-4 px-4 bg-background border-2 rounded-lg shadow-2xl overflow-hidden " +
          (centerModalPosition == true ? "-translate-x-1/4" : " ")
        }
      >
        <div className="flex justify-end mb-2 mr-2">
          <motion.button
            onClick={closeModalHookState}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.5 }}
            title="Close"
          >
            x
          </motion.button>
        </div>

        <div className="flex justify-center mb-4">
          <h3 id={uniqueId} className="text-xl font-black">
            {formType == "login" ? "Login" : "Sign Up"}
          </h3>
        </div>

        <form onSubmit={(e) => submitForm(e)}>
          <div className="space-y-4">
            <FormLabelInput
              type="email"
              name="email"
              labelName="Email"
              required
            />
            <FormLabelInput
              type="password"
              name="password"
              labelName="Password"
              required
            />
            <AnimatePresence>
              {formType == "signup" && (
                <FormLabelInput
                  type="password"
                  name="confirm-password"
                  labelName="Confirm Password"
                  required
                />
              )}
            </AnimatePresence>

            <label className="flex flex-row-reverse justify-end gap-x-2 cursor-pointer">
              Remember Me
              <input
                type="checkbox"
                className="cursor-pointer accent-black"
              ></input>
            </label>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full py-2 my-4 rounded-sm text-center font-black text-lg bg-black text-white"
          >
            {formType == "login" ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        <div className="flex gap-x-1 justify-center">
          <p>{formType == "signup" ? "Already a member?" : "Not a member?"} </p>
          <button
            className="underline"
            onClick={() =>
              setFormType(formType == "login" ? "signup" : "login")
            }
          >
            {formType == "signup" ? "Login now" : "Create a account"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginSignUpModal;
