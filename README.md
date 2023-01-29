# Chat
Work in progress

React app using Pusher.

- [Pusher](https://pusher.com)
- [TypeScript](https://www.typescriptlang.org/)
- [NX](https://nx.dev/)

## Getting Started

To get started:
1. Clone the repository:
```
    git clone https://github.com/polina090193/chat
```
2. Sign up to [Pusher](https://pusher.com) and [create a channel instance](https://dashboard.pusher.com/).
4. In the folder `chat/keys/src/lib/` create a file named `keys.ts` with the following code:
```
    export const appId = 'YOUR_APP_ID'
    export const key = 'YOUR_KEY'
    export const secret = 'YOUR_SECRET'
    export const cluster = 'YOUR_CLUSTER'
```
3. Go to **App keys** of [your channel](https://dashboard.pusher.com/).
4. Copy your keys to your `keys.ts`.
5. Run the following commands in your terminal for using with Nest.js:
```
    npm install
    npx nx run-many --target=serve --projects=chat,nest-api --parallel=true
```
Open [http://localhost:4200/](http://localhost:4200/) with your browser to see the result.
