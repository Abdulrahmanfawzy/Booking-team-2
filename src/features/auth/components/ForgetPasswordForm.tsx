import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { PhoneField } from "@/features/auth/components/PhoneField";
// import { Input } from "@/components/shared/Input";
import {
  forgetPasswordSchema,
  type ForgetPasswordFormValues,
} from "@/features/auth/schemas/auth.schema";
import useForgetPassword from "../hooks/useForgetPassword";

const ForgetPasswordForm = () => {
  const { mutate: forgetPassword, isError, isPending } = useForgetPassword();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: { phone: "" },
  });

  const onSubmit = ({ phone }: ForgetPasswordFormValues) =>
    forgetPassword({ phone });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col gap-5"
    >
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <PhoneField {...field} error={fieldState.error?.message} />
        )}
      />

      <Button
        type="submit"
        variant="brand"
        size="xl"
        fullWidth
        isLoading={isPending}
      >
        Reset Password
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
