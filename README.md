# Book-Search-Engine [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

A book search engine using using Google Books API and GraphQL with Apollo Server to fetch and modify data, replacing the old RESTful API method.
This app is also deploy to Heroku.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Links](#links)
- [License](#license)

## Description

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

[_back to top_](#table-of-contents)

## Tech Stack

- [![CSS3](https://img.shields.io/badge/CSS3-gray?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![HTML5](https://img.shields.io/badge/HTML5-gray?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![Javascript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Node.js](https://img.shields.io/badge/Node.js®-v20.7.1-blue?logo=node.js)](https://nodejs.org/en)
  - [![npm](https://img.shields.io/badge/npm-v10.1.0-blue?logo=npm)](https://docs.npmjs.com/cli/v10/)
    - [![Concurrently](https://img.shields.io/badge/Concurrently-8.2.1-blue?logo=express.js)](https://www.npmjs.com/package/concurrently)

[_back to top_](#table-of-contents)

## Installation

1. Packages to support this application can be installed by using [_npm install_](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

   > **Note**: If you do not have a `package.json` in your directory already, enter command below to [_initiate_](https://docs.npmjs.com/cli/v9/commands/npm-init).
   >
   > ```powershell
   > npm init -y
   > ```

2. **Important**: Please @ the **EXACT** versions as shown above to ensure the functionality of this application.

   ```powershell
   npm install
   ```

[_back to top_](#table-of-contents)

## Usage

- This application can be invoked by using the following command:

  ```powershell
  npm start
  ```

- Workflow:

    ```md
    GIVEN a book search engine
    WHEN I load the search engine
    THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
    WHEN I click on the Search for Books menu option
    THEN I am presented with an input field to search for books and a submit button
    WHEN I am not logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
    WHEN I click on the Login/Signup menu option
    THEN a modal appears on the screen with a toggle between the option to log in or sign up
    WHEN the toggle is set to Signup
    THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
    WHEN the toggle is set to Login
    THEN I am presented with two inputs for an email address and a password and login button
    WHEN I enter a valid email address and create a password and click on the signup button
    THEN my user account is created and I am logged in to the site
    WHEN I enter my account’s email address and password and click on the login button
    THEN I the modal closes and I am logged in to the site
    WHEN I am logged in to the site
    THEN the menu options change to Search for Books, an option to see my saved books, and Logout
    WHEN I am logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
    WHEN I click on the Save button on a book
    THEN that book’s information is saved to my account
    WHEN I click on the option to see my saved books
    THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
    WHEN I click on the Remove button on a book
    THEN that book is deleted from my saved books list
    WHEN I click on the Logout button
    THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
    ```

[_back to top_](#table-of-contents)

## Screenshots

<!-- ![Screenshot](./src/images/screenshots/AboutPage.png) -->

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20Book%20Search%20Engine%20App%20on%20GitHub:%20https://github.com/Ronin1702/Book-Search-Engine)

- GitHub Repo : [Book-Search-Engine](https://github.com/Ronin1702/Book-Search-Engine)
- HeroKu Deployed Link : [Book-Search-Engine](https://book-search-engine-3000.herokuapp.com/)

[_back to top_](#table-of-contents)

## License

- This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).

[_back to top_](#table-of-contents)

---

[![Copyright](https://img.shields.io/static/v1.svg?label=Book%20Search%20Engine%20©️%20&message=%202023%20Kai%20Chen&labelColor=informational&color=033450)](https://kaichen-3000.netlify.app)
