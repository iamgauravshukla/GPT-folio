import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typing from "react-typing-effect";

const IntroSection = () => {

  return (
    <div style={{width: "600px", height: "100%", display: "flex",justifyContent: "flex-start", alignItems : "center", fontSize: "2rem"}}>
      <Typing
        text={[
          "Welcome to My Portfolio!",
          "I am Gaurav, a Web Developer!",
          "Let's build something amazing together!",
        ]}
        speed={100}
        eraseSpeed={50}
        typingDelay={200}
        eraseDelay={1000}
      />
    </div>
  );
};

export default IntroSection;
