import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"
import { useRouter } from "next/router"
import nextWithApollo from "next-with-apollo"

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: new HttpLink({
        uri: "http://localhost:3000/api",
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter()
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      )
    },
  }
)

export default withApollo
