"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function OutroSectionContainer({
  imgSrc,
  imgAlt,
  heading,
  itemsList,
  additionalMarginOnSection,
  invertGrid,
  imgAspectRatio,
}: {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  itemsList: string[];
  imgAspectRatio?: string;
  additionalMarginOnSection?: boolean;
  invertGrid?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
        },
      }}
      viewport={{ once: true, amount: 0.45 }}
      className={
        "grid md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-24 mt-20 pt-20 border-t-2 border-[#767676] " +
        (additionalMarginOnSection == true
          ? "px-6 sm:px-24 md:px-8 lg:px-24"
          : "")
      }
    >
      <div
        className={
          "relative max-h-[576px] w-full " +
          (imgAspectRatio ? imgAspectRatio : "aspect-[5/5]")
        }
      >
        <Image src={imgSrc} alt={imgAlt} fill quality={100} />
      </div>

      <div
        className={
          "flex flex-col gap-y-12 my-auto " +
          (invertGrid == true ? " -order-1" : "")
        }
      >
        <h2 className="text-5xl sm:text-6xl font-black max-md:text-center">
          {heading}
        </h2>

        <ul className="list-disc ml-9 space-y-2 ">
          {itemsList.map((item) => (
            <li key={item} className="font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default OutroSectionContainer;
