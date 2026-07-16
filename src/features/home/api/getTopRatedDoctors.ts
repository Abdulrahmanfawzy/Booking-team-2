import axiosInstance from "@/services/AxiosConfig";

export async function getTopRatedDoctors() {
  try {
    //TODO edit profile end point
    const res = await axiosInstance.get(`/doctors`);
    console.log(res.data.data);
    return {};
  } catch (error) {
    console.log(error);
  }
}
