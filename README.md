This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## User Flow

> Note: This is a state based app, none of the data is saved in a database. Consider it a one time use sort of thing.

A user...

1. enters on the creation page
1. uploads a logo. This is the image that hides the content being selected later.
1. adds seven moment links from https://nbatopshot.com (Fully qualified url to the moment content. This includes the serial. e.g. https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9)
   - These are the moments that are being wagered. And later selected by the player.
1. after saving, the user is redirected to the game board.
1. user then proceeds to allow player to make selections. See Game Play for more.

## Game Play

Deal or No Deal is a game of choice and luck. First a user selects 2 of the 7 moments displayed on the board. They continue to choose whether or not to keep one of the moments selected, or to uncover two more of the hidden boxes, this continues until the user is either satisfied and selects a moment, or they are stuck at the last moment which they then have to take.
