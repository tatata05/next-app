import { AuthApi } from "@/api/typescript-axios";
import { Configuration } from "@/api/typescript-axios/configuration";
import axios from "axios";

const axiosInstance = axios.create();

const KintaiAuth = new AuthApi(
  {
    basePath: process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000",
  } as Configuration,
  undefined,
  axiosInstance,
);

export default KintaiAuth;
