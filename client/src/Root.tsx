import * as React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Router from "./components/Router";

const client = new ApolloClient({ uri: "http://localhost:3000/graphql" });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default Root;
