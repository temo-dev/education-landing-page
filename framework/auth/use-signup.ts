// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import http from "../utils/http";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { modals } from "@mantine/modals";

export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
}
async function signUp(input: SignUpInputType) {
  return http
    .post(API_ENDPOINTS.REGISTER, {
      username: input.name,
      password: input.password,
      email: input.email,
    })
    .then((res) => {
      return {
        name: res.data.user.username,
        accessToken: res.data.jwt,
      };
    });
}
export const useSignUpMutation = () => {
  const router = useRouter();
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.accessToken);
      modals.closeAll();
      toast.success("Đăng Ký Thành Công!");
      router.push("/main-game/map");
    },
    onError: (data) => {
      console.log(data, "login error response");
      toast.error("Xảy ra lỗi, Liên hệ admin !!");
    },
  });
};
