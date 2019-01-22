import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { getAuthorQuery, addBookMutation, getBooksQuery } from '../queries/queries'


class AddBook extends Component {
  constructor(props){
      super(props)
      this.state ={
          name:"",
          genre:"",
          authorId:""
      }
  }

  displayAuthor(){
      const data = this.props.getAuthorQuery
      if(data.loading){
          return (<option disabled>Loading Author </option>)
      }else {
          return data.authors.map(author => {
              return (<option key={author.id} value={author.id}>{author.name}</option>)
          })
      }
  }

  handleChnage = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  submitForm = (e) =>{
    e.preventDefault()
    console.log(this.state)
    this.props.addBookMutation({
        variables:{
            name:this.state.name,
            genre:this.state.genre,
            authorId:this.state.authorId
        },
        refetchQueries:[{query:getBooksQuery}]
    })
  }

  render() {
    console.log(this.props)
    return (
        <form id="add-book" onSubmit={this.submitForm}>
            <div className="field">
                <label htmlFor="Bookname">Bookname</label>
                <input id="Bookname" type="text" name="name" onChange={this.handleChnage}/>
            </div>
            <div className="field">
                <label htmlFor="Genre">Genre</label>
                <input id="Genre" name="genre" type="text" onChange={this.handleChnage}/>
            </div>
            <div className="field">
                <label htmlFor="Author">Author</label>
                <select name="authorId" id="Author" onChange={this.handleChnage}>
                    <option value="">select author</option>
                    {this.displayAuthor()}
                </select>
            </div>

            <button>+</button>
        </form> 
    );
  }
}

export default compose(
    graphql(getAuthorQuery,{name:"getAuthorQuery"}),
    graphql(addBookMutation, {name:"addBookMutation"})
)(AddBook);
