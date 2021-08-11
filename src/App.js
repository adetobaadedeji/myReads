import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
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
    if (searchValue.trim().length > 0 ) {
      BooksAPI.search(searchValue)
      .then((searchedBooks) =>{
        searchedBooks.length > 0 
        ? this.setState({ searchedBooks: searchedBooks })
        : this.setState({ searchedBooks: [] }); 
    })  
    } else this.setState({ searchedBooks: [] });   
  });

  resetSearch = () => {
    this.setState({ searchedBooks: [] });
  };

  NoMatch = ({ location }) => {
    return(
      <div>
          <h3>No match for the path: <code style={{color: "purple"}}>{location.pathname}</code></h3>
          <Link to="/"><h3>Go Back Home</h3></Link>
      </div>
  );
  };


  render() {
      return (
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
              <MainPage 
                books={this.state.books}
                onShelfUpdate={this.updateShelf}
              />
            )} 
            />
            <Route path="/search" render={({history}) => (
              <SearchPage 
                onShelfUpdate={this.updateShelf}
                onSearchBook={this.searchBook}
                searchedBooks={this.state.searchedBooks}
                books={this.state.books}
                onResetSearch={this.resetSearch}
              />
              )} 
            />
            <Route component={this.NoMatch} />
          </Switch>
        </div>
      )
  }
}

export default App
