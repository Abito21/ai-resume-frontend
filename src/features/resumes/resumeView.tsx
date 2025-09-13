import { useResumes } from "./hooks/useResumes";
import { ResumeForm } from "./components/resumeForm";
import { ResumeCard } from "./components/resumeCard";
import { EqualApproximately } from "lucide-react";

export const ResumeView = () => {
  const { resumes } = useResumes();

  return (
    <main className="space-y-8 p-8">
      <section>
        <h1>Resumes</h1>
        <p>All resumes will be displayed here</p>
      </section>

      <ResumeForm />

      {resumes?.length > 0 ? (
        <section className="space-y-4">
          <div className="bg-gray-100 rounded-md">
            {resumes?.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        </section>
      ) : (
        <div className="bg-gray-100/50 rounded-md p-4 flex justify-center items-center h-90">
          <div className="flex flex-col justify-center items-center">
            <EqualApproximately size={40} />
            <p className="text-sm text-gray-500">No resumes uploaded yet</p>
          </div>
        </div>
      )}
    </main>
  );
};