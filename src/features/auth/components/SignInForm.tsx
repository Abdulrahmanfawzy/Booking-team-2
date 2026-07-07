import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PhoneField } from "@/features/auth/components/PhoneField";

type SignInFormValues = {
  phone: string;
};

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormValues>({ defaultValues: { phone: "" } });

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
