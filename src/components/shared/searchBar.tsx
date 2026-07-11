import { SearchIcon } from "lucide-react";

import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const SearchBar = ({
  color,
  padding,
}: {
  color?: string;
  padding?: string;
}) => {
  return (
    <Field className="w-142 hidden md:block">
      <InputGroup
        className="bg-grey border-transparent"
        style={{ backgroundColor: color, paddingBlock: padding }}
      >
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search about specialty, doctor "
          className="placeholder:text-text/50"
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};

export default SearchBar;
