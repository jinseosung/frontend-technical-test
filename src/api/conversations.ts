import { Conversation } from "../types/conversation";

const API_BASE_URL = "http://localhost:3005";

export const getAllConversations = async (): Promise<Conversation[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/conversations`);
    if (!response.ok) {
      throw new Error("Failed to fetch conversations");
    }

    const conversations = await response.json();
    return conversations;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    throw error;
  }
};

export const getConversationByUserId = async (
  id: number,
  token?: string
): Promise<Conversation[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/conversations?senderId=${id}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch conversations for user with id ${id}`);
    }

    const conversations = await response.json();
    return conversations;
  } catch (error) {
    console.error(
      `Error fetching conversations for user with id ${id}:`,
      error
    );
    throw error;
  }
};

export const deleteConversationById = async (
  id: number,
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/conversations/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Failed to delete conversation with id ${id}`);
    }
  } catch (error) {
    console.error(`Error deleting conversation with id ${id}:`, error);
    throw error;
  }
};

export const addConversation = async (
  newConversation: Conversation,
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newConversation),
    });
    if (!response.ok) {
      throw new Error("Failed to add conversation");
    }
  } catch (error) {
    console.error("Error adding conversation:", error);
    throw error;
  }
};
