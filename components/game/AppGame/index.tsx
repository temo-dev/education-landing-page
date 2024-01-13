"use client";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { GameOne } from "../GameOne";
import { GameTwo } from "../GameTwo";
import { GameThree } from "../GameThree";

export function AppGame() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Stepper active={active} onStepClick={setActive} orientation="horizontal">
        <Stepper.Step
          label="Khởi Động"
          description="Củng cố từ vựng"
          loading={active === 0 ? true : false}
        >
          <GameOne />
        </Stepper.Step>
        <Stepper.Step
          label="Tăng Tốc"
          description="Ghép Câu Để Vượt Bão"
          loading={active === 1 ? true : false}
        >
          <GameTwo />
        </Stepper.Step>
        <Stepper.Step
          label="Về Đích"
          description="Căng Buồm Ra Khơi Thôi"
          loading={active === 2 ? true : false}
        >
          <GameThree />
        </Stepper.Step>
        <Stepper.Completed>
          Chúc Mừng Bạn Đã Thành Công, Hãy Sang Bài Mới Thôi Nào
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
