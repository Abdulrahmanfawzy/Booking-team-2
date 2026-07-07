import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PhoneField } from "@/features/auth/components/PhoneField";
import { Input } from "@/components/shared/Input";
import {
  signUpSchema,
  type SignUpFormValues,
} from "@/features/auth/schemas/auth.schema";

const SignUpForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    // TODO: wire up to the auth API
    console.log("sign up with", data.name, data.email, data.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
      <Input
        label="Full Name"
        placeholder="Full Name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register("email")}
      />
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
        isLoading={isSubmitting}
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
