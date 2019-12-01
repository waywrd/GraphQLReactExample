import React, { Component } from 'react';
import { getBooks } from '../queries/queries'
import { graphql } from 'react-apollo'
import BooksDetails from './BooksDetails'



class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks() {
        let data = this.props.data;

        if (data.loading) {
            return <h3>Data still loading</h3>
        }

        else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={() => { this.setState({ selected: book.id }) }}>{book.name}</li>
                );
            });
        }
    }
    render() {
        return (
            <div>
                {this.displayBooks()}
                <BooksDetails bookId={this.state.selected} />
            </div>

        )

    }
}



export default graphql(getBooks)(BookList);   