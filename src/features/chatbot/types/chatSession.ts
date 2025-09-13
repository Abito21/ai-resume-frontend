export interface UserMessage {
  role: "user";
  content: string;
}

export interface FunctionCall {
  type: "function_call";
  name: string;
  arguments: string;
}

export interface AssistantMessage {
  role: "assistant";
  content: {
    text: string;
  }[];
}

export interface ChatSession {
  messages: (UserMessage | FunctionCall | AssistantMessage)[];
}

function isUserMessage(message: UserMessage | FunctionCall | AssistantMessage): message is UserMessage {
  return "role" in message && message.role === "user";
}

function isFunctionCall(message: UserMessage | FunctionCall | AssistantMessage): message is FunctionCall {
  return "type" in message && message.type === "function_call";
}

function isAssistantMessage(message: UserMessage | FunctionCall | AssistantMessage): message is AssistantMessage {
  return "role" in message && message.role === "assistant";
}

export { isUserMessage, isFunctionCall, isAssistantMessage };