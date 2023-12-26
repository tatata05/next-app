import { NextRouter } from "next/router";

export const errorHandler = (error: unknown, router: NextRouter) => {
  if (error instanceof Error) {
    if (error.message.includes("401")) {
      router.push("/");
    } else if (error.message.includes("404")) {
      router.push("/admin");
    }
  }
};
