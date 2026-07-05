import { SlidersHorizontal } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DropDownMenu() {
  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ];

  const vegetables = [
    { label: "Carrot", value: "carrot" },
    { label: "Broccoli", value: "broccoli" },
    { label: "Spinach", value: "spinach" },
  ];

  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 cursor-pointer w-fit p-5 text-md bg-transparent!">
        <SelectValue
          placeholder={
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter</span>
            </div>
          }
        />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>

      </SelectContent>
    </Select>
  );
}
