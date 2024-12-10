import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I'm excited that you are here. Contact me now!!",
            1000,
            "Wanna hire me? Drop me a message here anytime. ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/profile_2.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;
