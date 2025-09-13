import { useQueryClient } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import useWebSocket from "react-use-websocket";

export const ResumeProcessingCard = (props: { resumeId: string }) => {
  const queryClient = useQueryClient();
  const { resumeId } = props;
  const [socketUrl] = useState(`ws://localhost:8000/ws/${resumeId}`);
  const { lastMessage } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("WebSocket connection opened");
    },
    onMessage: (message) => {
      if (message.data === "completed") {
        queryClient.invalidateQueries({ queryKey: ["resumes"] });
      }
    },
    onClose: () => {
      console.log("WebSocket connection closed");
    },
  });

  return (
    <div className="flex justify-start items-center gap-2 bg-gray-100 animate-pulse p-5">
      <LoaderIcon className="animate-spin" size={14} />
      <div className="text-gray-900">{lastMessage?.data || "Processing..."}</div>
    </div>
  );
};