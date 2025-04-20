import { BASE_URL } from "../constants";

export const getUrl = (path: string) => {
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;

  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  return `${BASE_URL}${cleanPath}`;
};