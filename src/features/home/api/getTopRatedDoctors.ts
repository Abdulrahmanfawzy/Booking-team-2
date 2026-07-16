import axiosInstance from "@/services/AxiosConfig";
export type TopRatedDoctors = {
  id: number;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  ratings_count: number;
  consultation_price: number;
  hospital: string;
  address: string;
  latitude: number;
  longitude: number;
};

export async function getTopRatedDoctors(): Promise<TopRatedDoctors[]> {
  try {
    const res = await axiosInstance.get(`/home`);

    return res.data.data.top_rated_doctors;
  } catch (error) {
    console.log(error);
  }
}
