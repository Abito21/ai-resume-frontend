import { useParams } from "react-router";
import { useResume } from "./hooks/useResume";

export const SingleResumeView = () => {
  const { id } = useParams();
  const { resume } = useResume(id!);

  return (
    <div className="bg-gray-100 rounded-lg grid grid-cols-2 h-screen">
      <iframe src={`http://localhost:8000/${resume?.file_path}`} title="Resume" className="w-full h-full" />
      <main className="p-8 space-y-4">
        <section className="space-y-2">
          <h1>Personal Information</h1>
          <div>{resume?.fullname}</div>
          <div>{resume?.email}</div>
          <div>{resume?.phone}</div>
          <div>{resume?.address}</div>
        </section>
        <section className="space-y-2">
          <h1>Skills</h1>
          <div className="flex flex-wrap gap-2">
            {resume?.skills.map((skill) => {
              return (
                <div key={skill} className="bg-gray-200 rounded px-2 py-1 text-xs">
                  {skill}
                </div>
              );
            })}
          </div>
        </section>
        <section className="space-y-2">
          <h1>Strengths</h1>
          <div>
            {resume?.strength.map((strength) => {
              return <div key={strength}>{strength}</div>;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};