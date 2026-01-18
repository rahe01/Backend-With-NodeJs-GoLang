import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_API = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookiStore = await cookies();
      // console.log(cookiStore.getAll().toString());
      const res = await fetch(`${AUTH_API}/get-session`, {
        headers: {
          Cookie: cookiStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: "No active session" } };
      }

      return { data: session, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
