import { Message } from "../types/message";

const API_BASE_URL = "http://localhost:3005";

export const getAllMessages = async (): Promise<Message[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/messages`);
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    const messages = await response.json();
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const getMessagesByConversationId = async (
  conversationId: number
): Promise<Message[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/messages?conversationId=${conversationId}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch messages for conversation ${conversationId}`
      );
    }

    const messages = await response.json();
    return messages;
  } catch (error) {
    console.error(
      `Error fetching messages for conversation ${conversationId}:`,
      error
    );
    throw error;
  }
};

export const addMessageInConversation = async (
  newMessageObject: Message,
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newMessageObject),
    });
    if (!response.ok) {
      throw new Error("Failed to add message to conversation");
    }
  } catch (error) {
    console.error("Error adding message to conversation:", error);
    throw error;
  }
};

export const deleteMessage = async (
  messageId: number,
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/messages/${messageId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Failed to delete message with id ${messageId}`);
    }
  } catch (error) {
    console.error(`Error deleting message with id ${messageId}:`, error);
    throw error;
  }
};
