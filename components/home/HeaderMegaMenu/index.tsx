"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { modals } from "@mantine/modals";
import { AuthenticationForm } from "../AuthenticationForm";
import { useRouter } from "next/navigation";
import { getAuthToken } from "@framework/utils/get-token";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const router = useRouter();
  const authToken = getAuthToken();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

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
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <Avatar src={"/assets/anime/smile.png"} />
            <a href="#" className={classes.link}>
              Giới Thiệu
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            ></HoverCard>
          </Group>
          <Group visibleFrom="sm">
            {/* <Button variant="default">Đăng Ký</Button> */}
            <Button onClick={openModal}>Vào Game</Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            transitionTimingFunction="ease"
          />
          <Avatar src={"/assets/anime/smile.png"} hiddenFrom="sm" />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="EduHat - Học Tiếng Séc"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="/" className={classes.link}>
            Giới Thiệu
          </a>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
