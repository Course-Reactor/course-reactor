import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.coursereactor.org/v1/graphql",
  cache: new InMemoryCache(),
});

export default function ApiProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
