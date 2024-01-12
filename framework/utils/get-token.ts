import Cookies from "js-cookie";

export const getAuthToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get("auth_token");
};
