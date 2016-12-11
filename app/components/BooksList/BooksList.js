import React from 'react'

class BooksList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      books: [
        { title: 'Harry Potter', author: 'J.K. Rowling' },
        { title: 'Hop on Pop', author: 'Dr. Suess' },
        { title: 'Moby Dick', author: 'Herman Melville' },
        { title: 'Ulysses', author: 'James Joyce' },
        { title: 'Catch 22', author: 'Someone' },
        { title: 'American Gods', author: 'Neil Gaiman' }
      ]
    }
  }

  handleSubmit (e) {
    e.preventDefault() //Prevent refresh
    console.log(e.target) //e is the event. form elements have states. on every event there's a state change. controlled componenets.
    const oldBooks = this.state.books
    const newBooks = this.state.books.concat({title: this.state.title, author: this.state.author})
    this.setState({
      title: '',
      author: '',
      books: newBooks
    })
  }
  render () {
    return (
      <div className='BooksList'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>Add a book</h1>
          <input label='Title' type='text' placeholder='Enter a title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
          <input label='Author' type='text' placeholder='Author' value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} />
          <input type='submit' />
        </form>
        <ul>
          {/* create an anonymous function to list <li>title by author</li> */}
          {this.state.books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
