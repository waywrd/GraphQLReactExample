import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBook } from '../queries/queries'

class BooksDetails extends Component {
    displayBookDetails() {
        const { book } = this.props.data;

        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books</p>
                    <ul>
                        {book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>
                        })}
                    </ul>
                </div>
            )
        }

        else {
            return (
                <div>
                    <p>No Book Selected ...</p>
                </div>
            );
        }
    }


    render() {
        return (
            <div>{this.displayBookDetails()}</div>
        )


    }
}



export default graphql(getBook,
    {
        options: (props) => {
            return {
                variables: {
                    id: props.bookId
                }
            }
        }
    }
)(BooksDetails);