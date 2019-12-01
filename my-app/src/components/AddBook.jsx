import React, { Component } from 'react';
import { getAuthors, addBookMutation, getBooks } from '../queries/queries'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash';




class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }

    }
    authorsList() {
        let data = this.props.getAuthors;
        if (data.loading) {
            return <option>Loading ....</option>

        }
        else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            });
        }
    }

    submitForm(e) {
        e.preventDefault();

        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooks }]

        });
    }



    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <label>Book Name</label>
                <input onChange={(e) => this.setState({ name: e.target.value })} />
                <br />

                <label>Genre</label>
                <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                <br />

                <label> Author Name</label>

                <select onChange={(e) => this.setState({ authorId: e.target.value })}>
                    <option>Select author</option>
                    {this.authorsList()}
                </select>
                <br />
                <button type='submit'>Add Book</button>
            </form>
        )
    }
}


export default compose(
    graphql(getAuthors, { name: 'getAuthors' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
