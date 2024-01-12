import { Box, Text, Title } from "@mantine/core";
import { Lesson, Monster } from "../../Lesson";
import classes from "./index.module.css";

const mockData: Monster[] = [
  {
    id: 1,
    dialog: "Chào Mừng Bạn Đến Với Monster City",
    isOpen: true,
    image: "/assets/cake/landOne-02.png",
  },
  {
    id: 2,
    dialog: "Cùng Nhau Vượt Qua Nào",
    isOpen: false,
    image: "/assets/cake/landOne-03.png",
  },
  {
    id: 3,
    dialog: "Bạn Mạnh Mẽ Thật Đấy, Tiếp Tục Nhé",
    isOpen: false,
    image: "/assets/cake/landOne-04.png",
  },
  {
    id: 4,
    dialog: "Bạn Mạnh Mẽ Thật Đấy, Tiếp Tục Nhé",
    isOpen: false,
    image: "/assets/cake/landOne-05.png",
  },
  {
    id: 5,
    dialog: "Bạn Mạnh Mẽ Thật Đấy, Tiếp Tục Nhé",
    isOpen: false,
    image: "/assets/cake/landOne-06.png",
  },
  {
    id: 6,
    dialog: "Bạn Mạnh Mẽ Thật Đấy, Tiếp Tục Nhé",
    isOpen: false,
    image: "/assets/cake/landOne-07.png",
  },
];

export const LevelOne = () => {
  return (
    <div className={classes.background}>
      <div>
        <Box mb="100px" bg="green.9">
          <Title size="h1" fw={900} style={{ color: "white" }}>
            Chương I - Thế Giới Loài Cây
          </Title>
        </Box>
        {mockData.map((data, index) => (
          <Lesson monster={data} key={index} />
        ))}
      </div>
    </div>
  );
};
