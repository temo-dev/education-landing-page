"use client";
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./HeroContentLeft.module.css";
import { AuthenticationForm } from "../AuthenticationForm";
import { modals } from "@mantine/modals";
import { useRouter } from "next/navigation";
import { getAuthToken } from "@framework/utils/get-token";

export function HeroContentLeft() {
  const router = useRouter();
  const authToken = getAuthToken();
  const openModal = () => {
    if (authToken !== undefined) {
      return router.push("/game");
    }
    return modals.open({
      title: "Đăng Ký Trở Thành Thành Viên",
      children: <AuthenticationForm />,
    });
  };
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          Cách học <span className={classes.boild}>Tiếng Séc</span> miễn phí,
          vui nhộn và hiệu quả!
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Học cùng <span className={classes.boild}>EduHat</span> rất vui nhộn,
          các nghiên cứu đã chứng minh tính hiệu quả của ứng dụng! Qua từng bài
          học ngắn, nhỏ gọn bạn vừa ghi điểm, mở khóa cấp độ mới vừa được luyện
          tập các kỹ năng giao tiếp hữu dụng.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
          onClick={openModal}
        >
          Vào Game
        </Button>
      </Container>
    </div>
  );
}
