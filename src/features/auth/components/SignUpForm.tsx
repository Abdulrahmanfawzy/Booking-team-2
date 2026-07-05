import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/shared/Button";
import { PhoneField } from "@/features/auth/components/PhoneField";
import { Input } from "@/components/shared/Input";

type SignUpFormValues = {
  name: string;
  email: string;
  phone: string;
};

const SignUpForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    // TODO: wire up to the auth API
    console.log("sign up with", data.name, data.email, data.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
      <Input
        label="Full Name"
        placeholder="Full Name"
        error={errors.name?.message}
        {...register("name", { required: "Please enter your full name" })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          },
        })}
      />
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Please enter your phone number",
          validate: (v) => {
            const digits = (v ?? "").replace(/\D/g, "");
            return (
              (digits.length >= 8 && digits.length <= 15) ||
              "Please enter a valid phone number"
            );
          },
        }}
        render={({ field, fieldState }) => (
          <PhoneField {...field} error={fieldState.error?.message} />
        )}
      />

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
