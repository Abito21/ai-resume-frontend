import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardLayout } from "../components/shared/dashboardLayout";
import { ResumeView } from "../features/resumes/resumeView";
import { ChatbotView } from "../features/chatbot/chatbotView";
import { SingleResumeView } from "../features/resumes/singleResumeView";
import { SingleChatbotView } from "../features/chatbot/singleChatbotView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<div>Hello!</div>} />
          <Route path="/resumes" element={<ResumeView />} />
          <Route path="/resumes/:id" element={<SingleResumeView />} />
          <Route path="/chatbot" element={<ChatbotView />} />
          <Route path="/chatbot/:id" element={<SingleChatbotView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}