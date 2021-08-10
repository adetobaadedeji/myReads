import React from 'react'; 

const BookList = (props) => {
    const {book} = props;

    const handleSelection = (event) => {
        const {value} = event.target;
        updateSelection(book, value)
    };

    const updateSelection = (book, shelf) => (
        props.onShelfUpdate(book, shelf)
    );

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={handleSelection} value={book.shelf} defaultValue='none'>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    );
};

export default BookList;