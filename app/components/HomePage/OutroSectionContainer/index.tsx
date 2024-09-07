import Image from "next/image";
import React from "react";

function OutroSectionContainer({
  imgSrc,
  imgAlt,
  heading,
  itemsList,
  additionalMarginOnSection,
}: {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  itemsList: string[];
  additionalMarginOnSection?: boolean;
}) {
  return (
    <section
      className={
        "grid md:grid-cols-2 gap-4 lg:gap-24 mt-20 pt-20 border-t-2 border-[#767676] " +
        (additionalMarginOnSection == true ? "px-6 sm:px-24 md:px-8 lg:px-24" : "")
      }
    >
      <div className="relative max-h-[576px] w-full aspect-[5/5]">
        <Image src={imgSrc} alt={imgAlt} fill quality={100} />
      </div>

      <div className="flex flex-col gap-y-12 my-auto">
        <h2 className="text-5xl sm:text-6xl font-black max-md:text-center">{heading}</h2>

        <ul className="list-disc ml-9 space-y-2 ">
          {itemsList.map((item) => (
            <li key={item} className="font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OutroSectionContainer;
