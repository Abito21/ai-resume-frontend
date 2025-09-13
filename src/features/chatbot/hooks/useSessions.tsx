import { useNavigate } from "react-router";
import api from "../../../utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface ChatSession {
  id: string;
  chat_title: string;
}

export const useSessions = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: sessions, isLoading } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const response = await api.get<ChatSession[]>("chatbot").json();
      return response;
    },
  });

  const { mutate: createChatSession } = useMutation({
    mutationFn: async () => {
      const response = await api.post<{ id: string }>("chatbot").json();
      return navigate(`/chatbot/${response.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });

  return {
    sessions,
    isLoading,
    createChatSession,
  };
};