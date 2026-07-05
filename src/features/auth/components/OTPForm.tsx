import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type OtpForm = { code: string };

const RESEND_SECONDS = 55;
const CODE_LENGTH = 4;

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
  } = useForm<OtpForm>({ defaultValues: { code: "" } });

  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [wrongCode, setWrongCode] = useState(false);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const onSubmit = async ({ code }: OtpForm) => {
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
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="font-heading text-3xl font-semibold text-(--Auth-head-font-color)">
          Code Verification
        </h1>
        <p className="mt-3 text-sm text-text">
          Code has been send to your phone number
        </p>
        <button
          type="button"
          className="mt-1 text-sm font-medium text-brand hover:underline"
        >
          Check your phone number
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <Controller
          name="code"
          control={control}
          rules={{
            required: "Please enter the code",
            minLength: {
              value: CODE_LENGTH,
              message: `Enter all ${CODE_LENGTH} digits`,
            },
          }}
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
          fullWidth
          isLoading={isSubmitting}
          className="mt-2"
        >
          Verify
        </Button>
      </form>
    </div>
  );
}
