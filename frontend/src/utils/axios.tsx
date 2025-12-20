import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",

  adapter:
    typeof window !== "undefined"
      ? undefined
      : require("axios/lib/adapters/http"),
});

export default instance;
