import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Maliiii</h1>
        <ul><BookList /></ul>
      </div>
      <AddBook />
    </ApolloProvider>
  );
}

export default App;
