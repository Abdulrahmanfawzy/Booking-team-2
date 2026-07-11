import { Button } from "@/components/ui/button";

interface AppointmentFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const tabs: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export default function AppointmentFilters({
  activeFilter,
  onFilterChange,
}: AppointmentFiltersProps) {
  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab) => (
        <Button
          variant="brand"
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={` ${activeFilter === tab.value
            ? "bg-brand text-white"
            : "bg-transparent text-booking-text-secondary "
            }`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
