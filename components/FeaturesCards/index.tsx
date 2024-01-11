"use client";
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./FeaturesCards.module.css";

const mockdata = [
  {
    title: "Dựa trên căn cứ khoa học",
    description:
      "Chúng tôi kết hợp các phương pháp giảng dạy khoa học với nội dung học thú vị để tạo nên những khóa học hữu ích giúp bạn luyện tập nghe, nói, đọc và viết!",
    icon: IconGauge,
  },
  {
    title: "Tiếp thêm động lực",
    description:
      "Ứng dụng giúp người học dễ dàng xây dựng thói quen học tập, qua những tính năng mô phỏng trò chơi, các thử thách vui vẻ, và nhắc nhở từ người bạn thân thiện - EduHat.",
    icon: IconUser,
  },
  {
    title: "Cá nhân hóa trải nghiệm học",
    description:
      "Kết hợp những điểm mạnh nhất của trí tuệ nhân tạo (AI) và khoa học về ngôn ngữ, các bài học được cá nhân hóa để giúp bạn tìm được cấp độ và nhịp độ học phù hợp nhất.",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={"#ff6b6b"}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Lựa chọn tốt nhất để học tiếng Séc
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Học Bất Kỳ Lúc Nào, Bất Kỳ Nơi Đâu
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Tích hợp các phương pháp tốt nhất hiện nay vào trong việc học ngoại ngữ
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
