import React, { ReactNode, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface Props {
  offset?: number;
  left?: boolean;
  right?: boolean;
  delay?: number;
  children?: ReactNode | string;
  marginRight?: string;
  [x: string]: any;
}

const Reveal: React.FC<Props> = (props) => {
  const animationVariants = {
    visible: { opacity: 1, y: 0, x: 0 },
    bottom: { opacity: 0, y: props.offset || 60 },
    left: { opacity: 0, x: props.offset ? `-${props.offset}` : -60 },
    right: { opacity: 0, x: props.offset || 60 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <MotionBox
      as={motion.div}
      ref={ref}
      animate={controls}
      initial={props.left ? "left" : props.right ? "right" : "bottom"}
      transition={{ duration: 0.6, delay: props.delay || 0.3 }}
      variants={animationVariants}
      {...props}
    >
      {props.children}
    </MotionBox>
  );
};

export default Reveal;

export const MotionBox = motion(Box);
