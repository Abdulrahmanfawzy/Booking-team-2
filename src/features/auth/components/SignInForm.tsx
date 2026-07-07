import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PhoneField } from "@/features/auth/components/PhoneField";
import {
  signInSchema,
  type SignInFormValues,
} from "@/features/auth/schemas/auth.schema";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { phone: "" },
  });

  const onSubmit = async (data: SignInFormValues) => {
    //API
    console.log("sign in with", data.phone);
  };

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
        isLoading={isSubmitting}
      >
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;
