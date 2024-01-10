"use client";
import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { AuthenticationForm } from "../AuthenticationForm/AuthenticationForm";
import { modals } from "@mantine/modals";

export function HeroImageBackground() {
  const openModal = () =>
    modals.open({
      title: "Đăng Ký Trở Thành Thành Viên",
      children: <AuthenticationForm />,
    });
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Sử dụng{" "}
          <Text component="span" inherit className={classes.highlight}>
            AI
          </Text>{" "}
          vào trong{" "}
          <Text component="span" inherit className={classes.highlight}>
            ôn thi Trvaly
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Là kỳ thi tiếng Séc tiện lợi, nhanh chóng với chi phí phải chăng,
            với sự kết hợp từ những nghiên cứu khoa học mới nhất và trí thông
            minh nhân tạo (AI) nhằm trao cơ hội giúp tất cả mọi người có thể
            thực hiện bài thi từ bất kỳ đâu, vào bất kỳ lúc nào khi họ thấy
            thoải mái nhất.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            onClick={openModal}
          >
            Bắt Đầu
          </Button>
        </div>
      </div>
    </div>
  );
}
