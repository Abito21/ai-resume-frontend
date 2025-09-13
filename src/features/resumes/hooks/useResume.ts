import { type ResumeDetail } from "../types/resume";
import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

export const useResume = (id: string) => {
  const { data: resume } = useQuery({
    queryKey: ["resume", id],
    queryFn: () => api.get<ResumeDetail>(`resumes/${id}`).json(),
  });

  return {
    resume,
  };
};