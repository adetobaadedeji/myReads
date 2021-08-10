import React from 'react';
import BookList from './bookList';

const CurrentlyReading = (props) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                        book.shelf === "currentlyReading" 
                        && <BookList 
                                key={book.id} 
                                book={book}
                                onShelfUpdate={props.onShelfUpdate}
                            /> 
                     ))}
                </ol>
            </div>
        </div>
    );
};

export default CurrentlyReading;