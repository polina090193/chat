export interface Message { username: string, message: string }

export interface MessageWithID extends Message {
  id: string,
}
