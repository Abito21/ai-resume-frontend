import { MessageCirclePlus } from "lucide-react";
import { useSessions } from "../hooks/useSessions";
import { Link } from "react-router";

export const SessionList = () => {
  const { sessions, createChatSession } = useSessions();

  return (
    <div className="w-[250px] h-screen overflow-y-auto bg-gray-100/50 border-r border-gray-300 p-2">
      <button
        className="flex justify-between items-center rounded text-sm font-medium w-full px-4 py-2.5 bg-blue-600 text-white"
        onClick={() => createChatSession()}
      >
        <div>New Chat</div>
        <MessageCirclePlus size={16} />
      </button>
      <div className="mt-2">
        {sessions?.map((session) => (
          <Link to={`/chatbot/${session.id}`} key={session.id} className="block text-sm  p-2 hover:bg-white font-medium cursor-pointer">
            {session.chat_title}
          </Link>
        ))}
      </div>
    </div>
  );
};