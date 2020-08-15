import { AnimatePresence } from "framer-motion";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "modern-normalize/modern-normalize.css";
import "../styles/main.scss";

const client = new ApolloClient({
  uri: "https://api.coursereactor.org/v1/graphql",
  cache: new InMemoryCache(),
});

export default function CourseReactor({ Component, pageProps, router }) {
  return (
    <ApolloProvider client={client}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ApolloProvider>
  );
}
