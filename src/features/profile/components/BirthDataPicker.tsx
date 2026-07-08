import BirthDayFieldWrapper from "./BirthDayFieldWrapper";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, i) => currentYear - i
);

export default function BirthDataPicker() {
  return (
    <div className="space-y-1">
      <div>
        <label className="text-sm text-black">Your Birthday</label>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BirthDayFieldWrapper>
          <select className="w-full outline-none">
            {days.map((day) => (
              <option key={day} value={day} className="text-sm">
                {day}
              </option>
            ))}
          </select>
        </BirthDayFieldWrapper>
        <BirthDayFieldWrapper>
          <select className="w-full outline-none">
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </BirthDayFieldWrapper>
        <BirthDayFieldWrapper>
          <select className="w-full outline-none ">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </BirthDayFieldWrapper>
      </div>
    </div>
  );
}
