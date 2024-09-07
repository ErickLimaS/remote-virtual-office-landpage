import React from "react";
import OutroSectionContainer from "../OutroSectionContainer";

function VideoSupportOutroSection() {
  return (
    <OutroSectionContainer
      additionalMarginOnSection={true}
      imgSrc="/imgs/homepage/supports-video-and-screen-share.png"
      imgAlt="Supports video & screen share"
      heading="Supports video & screen share"
      itemsList={[
        "Optionally move from audio to HD video",
        "Share your designs, features, and slides",
        "Securely encrypted & transmitted using WebRTC",
      ]}
    />
  );
}

export default VideoSupportOutroSection;
