import { QueryClient, useMutation } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";
import { toast } from "sonner";
import type {
  EditProfilePayload,
  EditProfileResponse,
  ValidationError,
} from "../types";

export const useEditProfile = () => {
  const queryClient = new QueryClient();
  return useMutation<EditProfileResponse, ValidationError, EditProfilePayload>({
    mutationFn: editProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      // console.log(error);
      //TODO handle error properly, maybe with a toast notification and redirect if unauthorized
    },
  });
};
