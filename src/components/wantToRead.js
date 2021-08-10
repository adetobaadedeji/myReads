import React from 'react';
import BookList from './bookList';

const WantToRead = (props) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                        book.shelf === "wantToRead" 
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

export default WantToRead;