import { HoverCard, Text } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./index.module.css";

export interface Monster {
  id: number;
  dialog: string;
  isOpen: boolean;
  image: string;
}

interface Props {
  monster: Monster;
  key: number;
}

export const Lesson: React.FC<Props> = ({ monster }) => {
  return (
    <div className={classes.lessonContainer}>
      <HoverCard
        width={200}
        shadow="lg"
        withArrow
        openDelay={200}
        closeDelay={400}
      >
        <HoverCard.Target>
          <motion.img
            animate={{
              scale: [1, 1.1, 1],
              y: [0, 10, 15, 20, 15, 10, 0],
              x: [0, 2, 4, 6, 4, 2, 0],
            }}
            transition={{
              duration: monster.isOpen ? 2 : 0,
              ease: "easeOut",
              times: [0, 0.2, 0.5, 0.8, 1.2, 1.5, 1.8, 2],
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            src={monster.image}
            width={150}
            height={150}
            style={{ filter: monster.isOpen ? "null" : "grayscale(100%)" }}
            className={classes.lessonImage}
          />
        </HoverCard.Target>
        {monster.isOpen ? (
          <HoverCard.Dropdown>
            <Text size="md">{monster.dialog}</Text>
          </HoverCard.Dropdown>
        ) : null}
      </HoverCard>
    </div>
  );
};
