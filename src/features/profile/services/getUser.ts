import axios from "axios";

import axiosInstance from "@/services/AxiosConfig";

export async function getProfile() {
  try {
    //TODO edit profile end point
    const res = await axiosInstance.get(`/profile`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      throw error.response?.data || "An error occurred";
    }
  }
}
