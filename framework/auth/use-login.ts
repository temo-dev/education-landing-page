import { API_ENDPOINTS } from "../utils/api-endpoints";
import http from "../utils/http";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { modals } from "@mantine/modals";
import { useRouter } from "next/navigation";

export interface LoginInputType {
  identifier: string;
  password: string;
}
async function login(input: LoginInputType) {
  return http
    .post(API_ENDPOINTS.LOGIN, {
      identifier: input.identifier,
      password: input.password,
    })
    .then((res) => {
      return {
        name: res.data.user.username,
        accessToken: res.data.jwt,
      };
    });
}

export const useLoginMutation = () => {
  const router = useRouter();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.accessToken);
      modals.closeAll();
      toast.success("Đăng nhập Thành Công!");
      router.push("/main-game/map");
    },
    onError: (data) => {
      console.log(data, "login error response");
      toast.error("Xảy ra lỗi, Liên hệ admin !!");
    },
  });
};
