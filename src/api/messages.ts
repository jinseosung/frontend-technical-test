import { Message } from "../types/message";
import db from "../server/db.json";

export const getAllMessages = (): Message[] => {
  return db.messages;
};

export const getMessagesByConversationId = (
  conversationId: number
): Message[] => {
  return db.messages.filter((message) => message.conversationId === conversationId);
};
