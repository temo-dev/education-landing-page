"use client";
import {
  AppShell,
  Avatar,
  Burger,
  Divider,
  Group,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LevelOne } from "../../ui/map/LevelOne";
import { FcHome } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcVip } from "react-icons/fc";
import Link from "next/link";

export function AppGame() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 100, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Avatar src={"/assets/anime/smile.png"} size={40} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Link href="/">
          <FcHome size={60} title="Map Game" />
        </Link>
        <Divider mb="30px" />
        <FcPaid size={60} title="Cửa Hàng" />
        <Divider mb="30px" />
        <FcVip size={60} title="Thông Tin" />
      </AppShell.Navbar>
      <AppShell.Main>
        <LevelOne />
      </AppShell.Main>
    </AppShell>
  );
}
