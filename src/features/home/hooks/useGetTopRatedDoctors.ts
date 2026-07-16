import { useSuspenseQuery } from "@tanstack/react-query";
import { getTopRatedDoctors } from "../api/getTopRatedDoctors";

export const useGetTopRatedDoctor = () =>
  useSuspenseQuery({
    queryKey: ["top-rated"],
    queryFn: getTopRatedDoctors,
    staleTime: 60 * 1000 * 5,
    gcTime: 60 * 1000 * 10,
  });
