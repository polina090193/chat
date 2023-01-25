export interface Chat { username: string, message: string }

export interface ChatWithID extends Chat {
  id: string,
}
