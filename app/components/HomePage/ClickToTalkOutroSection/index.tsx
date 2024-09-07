import React from "react";
import OutroSectionContainer from "../OutroSectionContainer";

function ClickToTalkOutroSection() {
  return (
    <OutroSectionContainer
      additionalMarginOnSection={true}
      imgSrc="/imgs/homepage/one-click-to-talk.png"
      imgAlt="One click to talk"
      heading="One click to talk"
      itemsList={[
        "Jump into audio rooms with a single click",
        "Securely encrypted & transmitted using WebRTC",
      ]}
    />
  );
}

export default ClickToTalkOutroSection;
