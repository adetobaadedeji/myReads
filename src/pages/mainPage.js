import React from 'react';
import CurrentlyReading from '../components/currentlyReading';
import Read from '../components/read';
import WantToRead from '../components/wantToRead';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  const {books, onShelfUpdate} = props;
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={books} onShelfUpdate={onShelfUpdate} />
                <WantToRead books={books} onShelfUpdate={onShelfUpdate}/>
                <Read books={books} onShelfUpdate={onShelfUpdate} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/searchPage">
                <button> Add a book</button>
              </Link>
            </div>
          </div>
    );
};

export default MainPage;