import { SessionList } from "./components/sessionList";

export const ChatbotView = () => {
  return (
    <div className="flex gap-4 h-screen">
      <SessionList />
      <div className="flex justify-center items-center flex-1 h-full">
        <div>Choose a session</div>
      </div>
    </div>
  );
};