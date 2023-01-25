interface UserInfo {
  username: string,
  submitName: (name: string) => void
}

interface Chat { username: string, message: string }

interface ChatWithID extends Chat {
  id: string,
}