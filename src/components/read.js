import React from 'react';
import BookList from './bookList';

const Read = (props) => {
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map(book => (
                    book.shelf === "read" 
                    && <BookList 
                          key={book.id} 
                          book={book}
                          onShelfUpdate ={props.onShelfUpdate}
                      />
                ))}
            </ol>
          </div>
        </div>
    );
};

export default Read;