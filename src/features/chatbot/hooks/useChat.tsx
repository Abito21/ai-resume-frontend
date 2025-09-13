import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";
import useWebSocket from "react-use-websocket";
import { useState } from "react";
import type { AssistantMessage, ChatSession, FunctionCall, UserMessage } from "../types/ChatSession";

export const useChat = (id: string) => {
  const [messages, setMessages] = useState<(UserMessage | FunctionCall | AssistantMessage)[]>([]);
  console.log(messages);
  useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const res = await api.get<ChatSession>(`chatbot/${id}`).json();
      setMessages(res.messages);
      return null;
    },
  });

  const { mutate: sendMessage, isPending: isSending } = useMutation({
    mutationFn: async (message: string) => {
      const res = await api
        .post<ChatSession>(`chatbot/${id}`, {
          json: {
            query: message,
          },
        })
        .json();

      setMessages((prev) => [...prev, { role: "user", content: message }]);
      return res;
    },
  });

  useWebSocket(`ws://localhost:8000/ws/${id}`, {
    onMessage: (e) => {
      const message = e.data.split("<|>");
      if (message[0] === "assistant") {
        console.log(message);
        setMessages((prev) => [...prev, { role: "assistant", content: [{ text: message[1] }] }]);
      } else if (message[0] === "tool") {
        setMessages((prev) => [...prev, { type: "function_call", name: message[1], arguments: "" }]);
      }
    },
    onOpen: () => {
      console.log("opened");
    },
    onClose: () => {
      console.log("closed");
    },
  });

  return {
    messages,
    sendMessage,
    isSending,
  };
};