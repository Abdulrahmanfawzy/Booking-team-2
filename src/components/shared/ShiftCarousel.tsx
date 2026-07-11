import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Brain,
  Ear,
  Eye,
  Stethoscope,
  Bone,
  Activity,
  Ribbon,
  Droplet,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const specialties = [
  {
    id: 1,
    title: "Dentist",
    icon: <Stethoscope className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Cardiologist",
    icon: <HeartPulse className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "ENT",
    icon: <Ear className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Neurologist",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "General Practitioner",
    icon: <Stethoscope className="h-4 w-4" />,
  },
  {
    id: 6,
    title: "Ophthalmologist",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    id: 7,
    title: "Pulmonologist",
    icon: <Stethoscope className="h-4 w-4" />,
  },
  {
    id: 8,
    title: "Dermatologist",
    icon: <Stethoscope className="h-4 w-4" />,
  },
  {
    id: 9,
    title: "Orthopedic",
    icon: <Bone className="h-4 w-4" />,
  },
  {
    id: 10,
    title: "Gastroenterologist",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    id: 11,
    title: "Oncologist",
    icon: <Ribbon className="h-4 w-4" />,
  },
  {
    id: 12,
    title: "Endocrinologist",
    icon: <Droplet className="h-4 w-4" />,
  },
  {
    id: 13,
    title: "Psychiatrist",
    icon: <UserRound className="h-4 w-4" />,
  },
];

export default function ShiftCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleFilter = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <button
        title="scrollLeft"
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow cursor-pointer"
      >
        <ChevronLeft size={18} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scroll-smooth px-12 py-2 no-scrollbar"
      >
        {specialties.map((item) => (
          <Button
            key={item.id}
            onClick={() => toggleFilter(item.id)}
            variant={selected.includes(item.id) ? "default" : "outline"}
            className="cursor-pointer rounded-full whitespace-nowrap gap-2 flex-shrink-0"
          >
            {item.icon}
            {item.title}
          </Button>
        ))}
      </div>

      <button
        title="ScrollRight"
        onClick={scrollRight}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow cursor-pointer"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
