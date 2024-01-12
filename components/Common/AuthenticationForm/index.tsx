"use client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton } from "@components/ui/GoogleButton";
import { useSignUpMutation } from "@framework/auth/use-signup";
import { useLoginMutation } from "@framework/auth/use-login";
import { toast } from "sonner";

export function AuthenticationForm(props: PaperProps) {
  const { mutate: signUp } = useSignUpMutation();
  const { mutate: login } = useLoginMutation();
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Email không hợp lệ"),
      password: (val) =>
        val.length <= 6 ? "Mật khẩu phải ít nhất 6 ký tự" : null,
    },
  });
  function handleSumbit(value: any) {
    toast.loading("Loading data");
    if (type === "login") {
      login({
        identifier: value.email,
        password: value.password,
      });
    } else {
      signUp({
        name: value.name,
        email: value.email,
        password: value.password,
      });
    }
  }
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Chào Mừng đến với EduHat,
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Divider label="Hoặc Dùng Email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit((value) => handleSumbit(value))}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Tên Nhân Vật"
              placeholder="Tên Nhân Vật"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="emailcuatoi@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Mật Khẩu"
            placeholder="Mật Khẩu"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password && "Mật khẩu phải ít nhất 6 ký tự"}
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="Tôi đã đọc và đồng ý với các điều khoản !"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Bạn có đã có 1 tài khoản?"
              : "Tôi chưa có tài khoản nào!"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type === "register" ? "Đăng Ký" : "Đăng Nhập")}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
