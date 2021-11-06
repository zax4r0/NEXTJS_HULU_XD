## work in progress 😅

## Fullstack Example with Next.js (GraphQL API) 🙃

This example shows how to implement a **fullstack app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/), [Apollo Client](https://www.apollographql.com/docs/react/) (frontend), [Nexus Schema](https://nxs.li/components/standalone/schema) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It uses a SQLite database file with some initial dummy data which you can find at [`./prisma/dev.db`](./prisma/dev.db).

## Getting started 😹

### 1. clone example and install dependencies 😆

Clone this repository:

```
git clone https://github.com/zax4r0/NEXTJS_HULU_XD.git --depth=1
```

Install npm dependencies:

```
cd NEXTJS_HULU_XD
```

```
npm install
```

If you have a look inside, you'll see a `.env` file and a `schema.prisma` file. The `schema.prisma` file will hold the database model and the `.env.local` file will hold the database connection string.

Because the database connection string contains sensitive information, it's a good practice to **never** commit this `.env` file with Git, so make sure it's also added to the `.gitignore` file.

</details>

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

## Note 🎉

Im using mongodb
yes with prisma its a preview feature check the prisma docs for more infoooooo

add .env.local make sure u add ur databaseurl in .env

```
cp .env.sample .env.local
```

```
npx prisma genaerate
```

### Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed
```

### 2. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## wel wel wel if its working dont read below doc is not correct and u get confused for sure

---

### Using the GraphQL API

You can also access the GraphQL API of the API server directly. It is running on the same host machine and port and can be accessed via the `/api` route (in this case that is [`localhost:3000/api`](http://localhost:3000/api)).

Below are a number of operations that you can send to the API.

### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    Image
    published
    author {
      id
      name
      email
    }
  }
}
```

### Create a new user

```graphql
mutation {
  signupUser(name: "Sarah", email: "sarah@prisma.io") {
    id
  }
}
```

### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
    Image: "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg"
  ) {
    id
    published
  }
}
```

### Publish an existing draft

```graphql
mutation {
  publish(postId: "__POST_ID__") {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Search for posts with a specific title or content

```graphql
{
  filterPosts(searchString: "graphql") {
    id
    title
    content
    Image
    published
    author {
      id
      name
      email
    }
  }
}
```

### Retrieve a single post

```graphql
{
  post(postId: "__POST_ID__") {
    id
    title
    content
    Image
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Delete a post

```graphql
mutation {
  deletePost(postId: "__POST_ID__") {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

</Details>

### well will fix this readme later

## Step 9: Auto-generate `useQuery` hooks and types

Instead of manually defining all the types we expect to receive via GraphQL, we can also use a very cool package _[GraphQL Code Generator](https://graphql-code-generator.com/)_ to generate types directly from the Nexus GraphQL endpoint. This way, you essentially only have to define the types once in the `schema.prisma` file as the single-source-of-truth, then all types you'll use in the application can be derived from that schema with little manual effort! 🎉

First, copy and refactor the GraphQL queries from the TSX files into the `graphql` directory. With the example from Step 8, create a new file at `/graphql/queries.graphql.ts` and copy the query from `/components/AllUsers.tsx`:

```tsx
import gql from "graphql-tag"

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`
```

_Separating GraphQL operations from components makes it easier to navigate the codebase._

Next, install the packages needed by `graphql-code-generator` as dev dependencies:

```bash
npm install -D \
    @graphql-codegen/cli \
    @graphql-codegen/typescript \
    @graphql-codegen/typescript-operations \
    @graphql-codegen/typescript-urql
```

Then, create a `codegen.yml` file in the project root with the following content:

```yaml
overwrite: true
schema: "http://localhost:3000/api/graphql" # GraphQL endpoint via the nexus dev server
documents: "graphql/**/*.graphql.ts" # parse graphql operations in matching files
generates:
  generated/graphql.tsx: # location for generated types, hooks and components
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-urql"
    config:
      withComponent: false # we'll use Urql client with hooks instead
      withHooks: true
```

The configs above will tell `graphql-code-generator` to pull the GraphQL schema from `http://localhost:3000/api/graphql`, then generate types, Urql `useQuery` hooks into a file located at `/generated/graphql.tsx`.

Cool, let the code generation begin (in _watch_ mode)!

```yaml
npx graphql-codegen --watch
```

You will see some nice, written-by-a-robot code in `/generated/graphql.tsx`. How neat!

now u can use the usequery hook in react

### 3. Build new UI features in React

Once you have added a new query or mutation to the API, you can start building a new UI component in React. It could e.g. be called `profile.tsx` and would be located in the `pages` directory.

In the application code, you can access the new operations via Apollo Client and populate the UI with the data you receive from the API calls.

## Next steps

- Check out the [Prisma docs](https://www.prisma.io/docs)
- Share your feedback in the [`prisma2`](https://prisma.slack.com/messages/CKQTGR6T0/) channel on the [Prisma Slack](https://slack.prisma.io/)
- Create issues and ask questions on [GitHub](https://github.com/prisma/prisma/)
- Watch our biweekly "What's new in Prisma" livestreams on [Youtube](https://www.youtube.com/channel/UCptAHlN1gdwD89tFM3ENb6w)
