import { type ResumeList } from "./../types/resume";
import { ResumeCategory } from "./resumeCategory";
import { Eye } from "lucide-react";
import { ResumeProcessingCard } from "./resumeProcessingCard";
import { Link } from "react-router";

export const ResumeCard = (props: { resume: ResumeList }) => {
  const { resume } = props;

  if (resume.status === "processing" || resume.status === "pending") {
    return <ResumeProcessingCard resumeId={resume.id} />;
  }

  return (
    <div key={resume.id} className="grid grid-cols-8 items-center border-b pb-4 pt-4 px-8 border-gray-200 hover:bg-white transition duration-75">
      <div className="col-span-2">
        <div>{resume.fullname}</div>
        <div className="text-xs font-medium text-gray-500">{resume.email}</div>
      </div>
      <div className="col-span-3 flex flex-wrap gap-2">
        {resume.skills.slice(0, 4).map((skill) => (
          <div key={skill} className=" w-fit bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            {skill}
          </div>
        ))}
        {resume.skills.length > 4 && (
          <div key="more" className=" w-fit bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            +{resume.skills.length - 4}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <ResumeCategory selectedCategory={resume.category} displayMode="badge" />
      </div>
      <div className="col-span-2 flex justify-end">
        <Link to={`/resumes/${resume.id}`}>
          <button className="bg-blue-600 text-white px-2 py-1 text-sm font-medium rounded-md flex items-center gap-2">
            <Eye size={15} />
            View Resume
          </button>
        </Link>
      </div>
    </div>
  );
};