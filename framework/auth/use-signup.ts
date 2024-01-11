// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import http from "../utils/http";
import { useMutation } from "react-query";
import Cookies from "js-cookie";

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
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.accessToken);
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
