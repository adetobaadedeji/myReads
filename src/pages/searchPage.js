import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/bookList';

const SearchPage = (props) => {
    const {books, searchedBooks, onSearchBook, onResetSearch} = props;

    const handleFilterText = event => (
        onSearchBook(event.target.value)
    )

    const filteredBooks = searchedBooks.map(sbook => {
        books.map(book => {
            if (sbook.id === book.id) {
                sbook.shelf = book.shelf
            }
            return book;
        })
        return sbook;
    });

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" onClick={onResetSearch}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={handleFilterText}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {filteredBooks.length > 0 
                    ? filteredBooks.map(book => (
                            <BookList 
                                key={book.id} 
                                book={book}
                                onShelfUpdate ={props.onShelfUpdate}
                                
                            />
                        ))
                    : <p>No book to display</p>  
                }
              </ol>
            </div>
        </div>
    );
};

export default SearchPage;