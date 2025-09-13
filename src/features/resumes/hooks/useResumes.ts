import { type ResumeList } from "./../types/resume";
import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

export const useResumes = () => {
  const { data: resumes } = useQuery({
    initialData: [],
    queryKey: ["resumes"],
    queryFn: () => api.get<ResumeList[]>("resumes").json(),
  });
  console.log(resumes);
  return {
    resumes,
  };
};