import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'

import BookDetails from './BookDetails'

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected:null
    }
  }

  displayBooks(){
    const data = this.props.data
    if(data.loading){
        return(<div>loading ...</div>)
    }else {
        return data.books.map(book => {
            return (
                <li key={book.id} id={book.id}>{book.name}</li>
            )
        })
    }
  }

  handleClick = (e) =>{
    console.log(e.target.id)
    this.setState({
      selected:e.target.id
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
          <ul id="book-list" onClick={this.handleClick}>
            { this.displayBooks() }
          </ul>
          <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
