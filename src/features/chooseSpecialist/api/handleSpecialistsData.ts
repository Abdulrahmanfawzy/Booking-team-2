import axios from "axios";
import { tokenStorage } from "@/features/auth/utils/tokenStorage";const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllSpecialists(){
    const token = tokenStorage.getToken();
    const response = await axios.get(`${baseUrl}/specialists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data
}