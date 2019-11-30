import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'


const getBooks = gql`
{
    books{
        name
        id
    }
}`

const BookList = (props) => {
    let data = props.data;

    if (data.loading) {
        return <h3>Data still loading</h3>
    }

    else {
        return data.books.map(book => {
            return (<li key={book.id}>{book.name}</li>);
        })
    };
}

export default graphql(getBooks)(BookList);   