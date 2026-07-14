import { Button } from "@/components/ui/button";
import EditProfileInput from "@/features/profile/components/EditProfileInput";
import { useEditPassword } from "@/features/profile/hooks/useEditPassword";
import {
  changePasswordSchema,
  type ChangePasswordType,
} from "@/features/profile/schemas/changePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ProfilePasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordType>({
    resolver: zodResolver(changePasswordSchema),
  });
  console.log(errors);
  const { mutate, isError, isSuccess, error } = useEditPassword();

  function onSubmit(data: ChangePasswordType) {
    console.log(data);
  }
  return (
    <>
      <h1 className="text-lg text-black">Change Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="md:space-y-5 space-y-6">
          <EditProfileInput
            {...register("old_password")}
            title="Old Password"
            type="password"
            errorMSG={errors.old_password?.message}
          />
          <EditProfileInput
            {...register("password")}
            title="New Password"
            type="password"
            errorMSG={errors.password?.message}
          />
          <EditProfileInput
            {...register("password_confirmation")}
            title="Confirm Password"
            type="password"
            errorMSG={errors.password_confirmation?.message}
          />
        </div>
        <div className="w-full text-end">
          <Button className="w-1/3 py-3 text-center bg-brand text-white hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}
