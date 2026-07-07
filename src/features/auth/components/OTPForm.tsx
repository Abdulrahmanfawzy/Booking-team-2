import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  otpSchema,
  CODE_LENGTH,
  type OtpFormValues,
} from "@/features/auth/schemas/auth.schema";

const RESEND_SECONDS = 55;

// Placeholder "correct" code until the verify API is wired up.
const CORRECT_CODE = "0000";

const slotBase =
  "size-14 rounded-xl border bg-(--Auth-bg) text-xl font-semibold text-text-h " +
  "first:rounded-xl last:rounded-xl transition-all data-[active=true]:ring-2 data-[active=true]:bg-(--bg)";

export default function OTPVerifyForm() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: "" },
  });

  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [wrongCode, setWrongCode] = useState(false);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const onSubmit = async ({ code }: OtpFormValues) => {
    if (code !== CORRECT_CODE) {
      setWrongCode(true);
      return;
    }
    setWrongCode(false);
    console.log("verify", code);
  };

  const handleResend = () => {
    //api
    setWrongCode(false);
    setSecondsLeft(RESEND_SECONDS);
  };

  const slotClasses = cn(
    slotBase,
    wrongCode
      ? "border-red-400 ring-1 ring-red-400 data-[active=true]:ring-red-500"
      : "border-border-secondary data-[active=true]:ring-brand",
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col items-center gap-4"
    >
      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <InputOTP
            maxLength={CODE_LENGTH}
            pattern={REGEXP_ONLY_DIGITS}
            value={field.value}
            onChange={(value) => {
              if (wrongCode) setWrongCode(false);
              field.onChange(value);
            }}
            onBlur={field.onBlur}
            autoFocus
          >
            <InputOTPGroup className="gap-3">
              {Array.from({ length: CODE_LENGTH }, (_, i) => (
                <InputOTPSlot key={i} index={i} className={slotClasses} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {/* Error line: field validation, or a code the API rejected */}
      {(errors.code || wrongCode) && (
        <p className="text-sm font-medium text-red-500">
          {wrongCode ? "Wrong code" : errors.code?.message}
        </p>
      )}

      {/* Countdown while waiting; full options once it lapses or on a wrong code */}
      {secondsLeft > 0 && !wrongCode ? (
        <p className="text-sm text-text">
          Resend code in <span className="text-brand">{secondsLeft}</span> s
        </p>
      ) : (
        <p className="flex items-center gap-2 text-sm text-text">
          <button
            type="button"
            onClick={handleResend}
            className="font-medium text-brand hover:underline"
          >
            Resend
          </button>
          <span>Or</span>
          <button
            type="button"
            onClick={() => navigate("/sign-in")}
            className="font-medium text-brand hover:underline"
          >
            Enter another phone number
          </button>
        </p>
      )}

      <Button
        type="submit"
        variant="brand"
        size="xl"
        fullWidth
        isLoading={isSubmitting}
        className="mt-2"
      >
        Verify
      </Button>
    </form>
  );
}
