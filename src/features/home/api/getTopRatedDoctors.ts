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
  // Let request/network errors throw so React Query can expose them via
  // `isError`. Guard the response shape so a 200 with a missing field still
  // resolves to a usable array instead of `undefined`.
  const res = await axiosInstance.get(`/home`);
  return res.data?.data?.top_rated_doctors ?? [];
}
