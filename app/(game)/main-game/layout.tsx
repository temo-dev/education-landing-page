"use client";
import {
  AppShell,
  Avatar,
  Burger,
  Divider,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FcHome, FcPaid, FcVip } from "react-icons/fc";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <NavLink
          href="/main-game/map"
          label={<FcHome size={40} title="Map Game" />}
        />
        <Divider mb="30px" />
        <NavLink
          href="/main-game/shop"
          label={<FcPaid size={40} title="Cửa Hàng" />}
        />
        <Divider mb="30px" />
        <NavLink
          href="/main-game/map"
          label={<FcVip size={40} title="Thông Tin" />}
        />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
