interface UserInfo {
  username: string,
  submitName: (name: string) => void,
  logout: () => void,
}
