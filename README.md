# MyReads Nanodegree Project - 01

This is the final assessment project for Udacity's [React Fundamentals course](https://www.udacity.com/course/react-nanodegree--nd019?utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=1971936383_c&utm_term=71052941455_in&utm_keyword=react%20nanodegree_e&gclid=CjwKCAjw4KD0BRBUEiwA7MFNTRd-nRYUumYFI7dQy2EssxO97Iwy7EN3w6Bc2uQOm-3_c1d3d7QJnxoCw_wQAvD_BwE).

In this MyReads project, a user will be able to select and categorize books based on 'you have read', 'are currently reading', or 'want to read'. User can add more books to respective shelves by clicking the '+' button. On click of '+' will direct user to search page. The user can search books by 'title' or 'author'. Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. If a book is assigned to a shelf on the main page and that book appears on the search page, the respective shelf would be pre-selected on the search page. If that book's shelf is changed on the search page, that change will be reflected on the main page as well. The option "None" will be pre-selected if a book has not been assigned to a user's shelf. If you clear browser history and cookies, user shelves will be reset on main page. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Installation Procedure

```bash

git clone https://github.com/prem-io/react-myReads.git
cd react-myReads

```

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├── AppHeader.js
    │   ├── Book.js
    │   ├── Loader.js
    │   ├── SearchBar.js
    │   ├── SearchLayout.js
    │   ├── SelectMenu.js
    │   ├── Shelf.js
    │   └── ShelvesLayout.js
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── util.js # all helper function
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
