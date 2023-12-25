export interface Message {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  private: boolean
  body: string
}