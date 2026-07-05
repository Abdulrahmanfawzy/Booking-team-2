import { useState, forwardRef } from "react";
import { Input } from "@/components/shared/Input";
import { type Country } from "@/features/auth/data/countries";
import {
  detectCountry,
  defaultCountry,
} from "@/features/auth/utils/CountryUtils";
import CountrySelect from "@/features/auth/components/CountrySelect";

type PhoneFieldProps = {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  error?: string;
};

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  function PhoneField({ value = "", onChange, onBlur, name, error }, ref) {
    const [selected, setSelected] = useState<Country>(defaultCountry);

    const country = detectCountry(value) ?? selected;

    const handleSelect = (c: Country) => {
      setSelected(c);
      onChange?.(`+${c.dial} `);
    };

    return (
      <Input
        ref={ref}
        name={name}
        label="Phone Number"
        type="tel"
        inputMode="tel"
        placeholder="Enter your number"
        autoComplete="tel"
        value={value}
        error={error}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        startAdornment={
          <CountrySelect country={country} onSelect={handleSelect} />
        }
      />
    );
  },
);
