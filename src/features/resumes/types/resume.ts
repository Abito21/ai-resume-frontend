export interface ResumeList {
  id: string;
  category: string;
  file_name: string;
  file_path: string;
  created_at: string;
  fullname: string;
  email: string;
  status: "pending" | "processing" | "completed";
  skills: string[];
  address: string;
  phone: string;
}

export interface ResumeDetail extends ResumeList {
  summary: string;
  strength: string[];
}