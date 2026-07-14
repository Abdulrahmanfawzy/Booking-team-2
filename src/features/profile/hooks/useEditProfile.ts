import { QueryClient, useMutation } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";
import { toast } from "sonner";

export const useEditProfile = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      toast.error(`Error updating profile: ${error.message}`);
      //TODO handle error properly, maybe with a toast notification and redirect if unauthorized
    },
  });
};
