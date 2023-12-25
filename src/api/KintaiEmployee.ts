import { EmployeeApi } from "@/api/typescript-axios";
import { Configuration } from "@/api/typescript-axios/configuration";
import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

const KintaiEmployee = new EmployeeApi(
  {
    basePath: process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000",
  } as Configuration,
  undefined,
  axiosInstance,
);

export default KintaiEmployee;
