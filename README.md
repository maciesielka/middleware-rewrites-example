This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

This project tries to maintain an externally-facing route `/rewritten/[slug]` by redirecting to the `/route` page implementation in this project, passing the slug as a search param rather than a path param. To do this, it uses middleware rewrites.

The issue shown in this project is that `useSearchParams()` cannot be used to fetch the rewritten search params.

## Steps to reproduce

1. Navigate to `/`
2. Click on the first link to `/route?slug=hello-world`
3. Observe the expected behavior of this page, it shows that the slug is `hello-world`
4. Go back to `/`
5. Navigate to the second link that encodes the link as a path param, `/rewritten/hello-world`

Observed: that the slug isn't available

Expected: the slug should be available since we're rendering the rewritten page

Note: the `x-middleware-rewrite` header _does_ denote that the correctly rewritten route is being used.

![screenshot](/screenshot.png)
