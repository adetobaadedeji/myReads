import React from 'react';
import BookList from './bookList';

const Shelf = (props) => {
    const {books, title, category, onShelfUpdate} = props;
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        book.shelf === category 
                        && <BookList 
                                key={book.id} 
                                book={book}
                                onShelfUpdate={onShelfUpdate}
                            /> 
                     ))}
                </ol>
            </div>
        </div>
    );
};

export default Shelf;