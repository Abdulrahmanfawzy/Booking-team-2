import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = Omit<React.ComponentProps<"input">, "size"> & {
  label?: string;
  error?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  containerClassName?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      className,
      containerClassName,
      label,
      error,
      startAdornment,
      endAdornment,
      id,
      ...props
    },
    ref,
  ) {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-text-h"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex h-12 w-full items-center overflow-hidden rounded-lg border border-border-secondary bg-(--bg) transition-colors focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20",
            error &&
              "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          {startAdornment}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "h-full w-full flex-1 bg-transparent px-4 text-sm text-text-h placeholder:text-text outline-none",
              startAdornment && "pl-3",
              endAdornment && "pr-3",
              className,
            )}
            {...props}
          />
          {endAdornment}
        </div>

        {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
      </div>
    );
  },
);
