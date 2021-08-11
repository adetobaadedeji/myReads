import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/shelf';

const MainPage = (props) => {
  const {books, onShelfUpdate} = props;

  const shelves = [
    { title: 'Currently Reading', category: 'currentlyReading' },
    { title: 'Want To Read', category: 'wantToRead' },
    { title: 'Read', category: 'read' },
  ];

  const bookshelf = shelves.map(shelf => 
  <Shelf
    key={shelf.category}
    category={shelf.category}
    title={shelf.title}
    books={books}
    onShelfUpdate={onShelfUpdate}
  />);

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelf}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <span> Add a book</span>
          </Link>
        </div>
      </div>
    );
};

export default MainPage;