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
    console.log(props)
    return (

        <div>
            <ul id="book-list"></ul>

        </div>

    );
}

export default graphql(getBooks)(BookList);   