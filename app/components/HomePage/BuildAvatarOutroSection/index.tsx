import React from "react";
import OutroSectionContainer from "../OutroSectionContainer";

function BuildAvatarOutroSection() {
  return (
    <OutroSectionContainer
      invertGrid={true}
      additionalMarginOnSection={true}
      imgSrc="/imgs/homepage/build-your-avatar.png"
      imgAlt="Build your avatar"
      imgAspectRatio="aspect-[5/4]"
      heading="Build your avatar"
      itemsList={[
        "Choose whether your door is open or closed",
        "See the rooms in your office",
        "Join the #water-cooler room to chat about personal life",
      ]}
    />
  );
}

export default BuildAvatarOutroSection;
