import { Send, ToolCase } from "lucide-react";
import { SessionList } from "./components/sessionList";
import { useChat } from "./hooks/useChat";
import { useParams } from "react-router";
import { useState } from "react";
import { isAssistantMessage, isFunctionCall, isUserMessage } from "./types/ChatSession";
import { MarkdownComponent } from "./components/MarkdownComponent";

export const SingleChatbotView = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const { sendMessage, messages } = useChat(id!);

  return (
    <div className="flex h-screen">
      <SessionList />
      <div className="flex-1 h-full flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, i) => (
            <div key={i}>
              {isUserMessage(message) && (
                <div className="flex justify-end">
                  <div className="max-w-xs lg:max-w-md px-4 py-2 bg-blue-600 text-white rounded-2xl rounded-br-md ">
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              )}
              {isFunctionCall(message) && (
                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md px-3 text-sm py-2 bg-yellow-100 text-yellow-800 rounded-2xl rounded-bl-md flex gap-1 items-center border border-yellow-200">
                    <ToolCase size={15} />
                    {message.name}
                  </div>
                </div>
              )}
              {isAssistantMessage(message) && (
                <div className="flex justify-start">
                  <div className="max-w-2xl lg:max-w-3xl px-4 py-2 bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md ">
                    <div className="text-sm">
                      <MarkdownComponent>{message.content[0].text}</MarkdownComponent>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-gray-100 border-t border-gray-300 p-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (message.trim()) {
                  sendMessage(message);
                  setMessage("");
                }
              }
            }}
            placeholder="Type your message here"
            className="w-full resize-none text-sm focus-within:outline-none"
          />
          <div className="flex justify-end">
            <button
              onClick={() => {
                sendMessage(message);
                setMessage("");
              }}
              className="bg-blue-700 text-sm font-medium text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Send size={14} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};