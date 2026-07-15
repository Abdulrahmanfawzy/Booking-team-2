import apiClient from "@/services/ApiClient";

export const doctorApi = {
  async getDoctorDetails(): Promise<DoctorDetailsResponse> {
    return apiClient.post<DoctorDetailsResponse>(
      "/doctor/:doctorId?latitude=30.0444&longitude=31.2357",
    );
  },
};
