import React from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import * as BooksAPI from './BooksAPI'

import './App.css'
import MainPage from './pages/mainPage'
import SearchPage from './pages/searchPage'

class App extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
  };

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books: books
      }));
    })
    .catch(error => error)
  };

  updateShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(res => {
        if (shelf === 'none') {
          book.shelf = shelf;
          this.setState((currentBooks) => ({
            books: currentBooks.books.filter(bk => bk.id !== book.id) 
          }));
        } else{
          book.shelf = shelf;
          this.setState((currentBooks) => ({
            books: currentBooks.books.filter(bk => bk.id !== book.id).concat(book) 
          }));
        }
      })
      .catch(err => err)
  };

  searchBook = debounce(500, false, (searchValue) => {
    if (searchValue.length > 0 ) {
      BooksAPI.search(searchValue.trim())
      .then((searchedBooks) =>{
      if (searchedBooks.length > 0) {
        this.setState({
          searchedBooks: searchedBooks
        });
      }
      else{
        this.setState({
          searchedBooks: []
        });
      }
    });  
    } else{
      this.setState({
        searchedBooks: []
      });
    }
    
  });

  resetSearch = () => {
    this.setState({ searchedBooks: [] });
  };


  render() {
      return (
        <div className="app">
          <Route exact path="/" render={() => (
            <MainPage 
              books={this.state.books}
              onShelfUpdate={this.updateShelf}
            />
          )} 
          />
          <Route path="/searchPage" render={({history}) => (
            <SearchPage 
              onShelfUpdate={this.updateShelf}
              onSearchBook={this.searchBook}
              searchedBooks={this.state.searchedBooks}
              books={this.state.books}
              onResetSearch={this.resetSearch}
            />
            )} 
          />
        </div>
      )
  }
}

export default App
