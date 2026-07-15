import { QueryClient, useMutation } from "@tanstack/react-query";

import { editPassword } from "../services/editPassword";
import { toast } from "sonner";
import type { PasswordResponse, PasswordValError } from "../types";
import type { ChangePasswordType } from "../schemas/changePasswordSchema";

export const useEditPassword = () => {
  const queryClient = new QueryClient();
  return useMutation<PasswordResponse, PasswordValError, ChangePasswordType>({
    mutationFn: editPassword,
    onSuccess: () => {
      toast.success("Password Change successfully.");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      //TODO handle error properly, maybe with a toast notification and redirect if unauthorized
      console.log(error);
      alert(`Error updating profile: ${error.message}`);
    },
  });
};
