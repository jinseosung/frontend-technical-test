import { Conversation } from "../types/conversation";
import db from "../server/db.json";

export const getAllConversations = (): Conversation[] => {
  return db.conversations;
};

export const getConversationById = (
  id: number,
  token?: string
): Conversation[] => {
  return db.conversations.filter(
    (conversation) => conversation.senderId === id
  );
};
