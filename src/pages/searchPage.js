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

    const filteredBookList = 
        filteredBooks.length > 0 
            ? filteredBooks.map(book => 
                <BookList 
                    key={book.id} 
                    book={book}
                    onShelfUpdate={props.onShelfUpdate}                       
                />)
            : <p>No book to display</p> 

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <span className="close-search" onClick={onResetSearch}>Close</span>
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
                  {filteredBookList}
                </ol>
            </div>
        </div>
    );
};

export default SearchPage;