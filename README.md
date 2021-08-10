<<<<<<< HEAD
# MyReads Project

This project is a bookshelf (Cataloguing/Tracking) app that allows users to select and categorize books they have read, are currently reading, or want to read.
This project is one of the prerequisite projects for the completion of the Udacity React Nanodegree Program. This project is built using React and the content is fetched via a backend server fetching the files from https://reactnd-books-api.udacity.com

## To get started

- install all project dependencies with `yarn add`
- start the development server with `yarn start`

The application will be running at http://localserver:3000
The live version is available at "https://adetobaadedeji.github.io/myReads/"

## Description/Features

- The main page shows 3 shelves for books named “currently reading”, “want to read”, or “read”.
- The main page shows a control that allows users to move books between shelves. The control is tied to each book instance.

- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- The search page also contains a link back to the main page.

- The search page has a search input field.
- As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors.
- Search results are not shown when all of the text is deleted out of the search input box.
- Invalid queries are handled and prior search results are not shown.
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
- Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

- Information persist between page refreshes: when the browser is refreshed, the same information is displayed on the page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Author

- This project is created by Adetoba Adedeji

