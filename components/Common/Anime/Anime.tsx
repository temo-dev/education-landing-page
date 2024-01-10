"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar } from "@mantine/core";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const Anime = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Avatar src={"/assets/anime/smile.png"} size={50} />
    </motion.div>
  );
};
