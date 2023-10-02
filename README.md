# Book-Search-Engine [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

A book search engine demonstrating M.E.R.N. stack development by using using Google Books API and GraphQL with Apollo Server to fetch and modify data, replacing the old RESTful API method.
This app is also deploy to Heroku @ [B.S.E.](https://bse-9db92fa44301.herokuapp.com/)

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
- [![Node.js](https://img.shields.io/badge/Node.js®-v20.7.1-blue?logo=node.js)](https://nodejs.org/en/)
  - [![npm](https://img.shields.io/badge/npm-v10.1.0-blue?logo=npm)](https://docs.npmjs.com/cli/v10/)
    - [![Concurrently](https://img.shields.io/badge/Concurrently-8.2.1-blue?logo=npm)](https://www.npmjs.com/package/concurrently)
    - [![Nodemon](https://img.shields.io/badge/Nodemon-3.0.1-blue?logo=nodemon)](https://www.npmjs.com/package/nodemon)
- [![Express.js](https://img.shields.io/badge/Express.js-4.18.2-green?logo=express)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-6.1.0-green?logo=mongodb)](https://www.mongodb.com/)
  - [![Mongoose](https://img.shields.io/badge/Mongoose-7.5.3-green?logo=mongoose)](https://mongoosejs.com/)
- [![GraphQL](https://img.shields.io/badge/GraphQL-gray?logo=graphql)](https://graphql.org/)
  - [![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.9.3-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/apollo-server/)
  - [![graphql-tag](https://img.shields.io/badge/graphql--tag-2.12.6-blue?logo=graphql)](https://www.npmjs.com/package/graphql-tag)
- [![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1.1-orange?logo=npm)](https://www.npmjs.com/package/bcrypt)
- [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-9.0.2-green?logo=npm)](https://www.npmjs.com/package/jsonwebtoken)
  - [![JWT Decode](https://img.shields.io/badge/JWT%20Decode-3.1.2-green?logo=npm)](https://www.npmjs.com/package/jwt-decode)
- [![dotenv](https://img.shields.io/badge/dotenv-16.3.1-blue?logo=dotenv)](https://www.npmjs.com/package/dotenv)
- [![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
  - [![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-lightblue?logo=react)](https://reactjs.org/)
  - [![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.16.0-purple?logo=react-router)](https://reactrouter.com/)
  - [![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.8.4-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/react/)
- [![Vite](https://img.shields.io/badge/Vite-4.4.9-blue?logo=vite)](https://vitejs.dev/)
  - [![Vite React Plugin](https://img.shields.io/badge/Vite%20React%20Plugin-4.1.0-lightblue?logo=vite)](https://vitejs.dev/)
- [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?logo=bootstrap)](https://getbootstrap.com/)
  - [![React-Bootstrap](https://img.shields.io/badge/React%20Bootstrap-2.8.0-purple?logo=bootstrap)](https://react-bootstrap.github.io/)

[_back to top_](#table-of-contents)

## Installation

1. Packages to support this application can be installed by using [_npm install_](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

   > **Note**: If you do not have a `package.json` in your directory already, enter command below to [_initiate_](https://docs.npmjs.com/cli/v9/commands/npm-init).
   >
   > ```powershell
   > npm init -y
   > ```

2. **Important**: Please @ the **EXACT** versions as shown above to ensure the functionality of this application.

   - Main Project:

     ```powershell
     npm install concurrently@8.2.1 nodemon@3.0.1
     ```

   - Server:

     ```powershell
     npm install @apollo/server@4.9.3 bcrypt@5.1.1 express@4.18.2 graphql@16.8.1 graphql-tag@2.12.6 jsonwebtoken@9.0.2 mongoose@7.5.3
     npm install --save-dev dotenv@16.3.1 nodemon@3.0.1
     ```

   - Client:

     ```powershell
     npm install @apollo/client@3.8.4 @vitejs/plugin-react@4.1.0 bootstrap@5.3.2 jwt-decode@3.1.2 react@18.2.0 react-bootstrap@2.8.0 react-dom@18.2.0 react-router-dom@6.16.0 vite@4.4.9
     npm install --save-dev @types/react@18.2.22 @types/react-dom@18.2.7 eslint@8.50.0 eslint-plugin-react@7.33.2 eslint-plugin-react-hooks@4.6.0 eslint-plugin-react-refresh@0.4.3
     ```

3. **Config**: Please add the correct environmental variables in the `.env` file in the `server` directory like the example below:

   ```javascript
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<collection-name>
   SECRET=<SECRET-TO-JWT>
   ```

[_back to top_](#table-of-contents)

## Usage

- This application can be invoked by using the following command:

    ```powershell
    npm start
    ````

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

### Logged In & Saved Books View

![Screenshot](./Screenshot.png)

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20Book%20Search%20Engine%20App%20on%20GitHub:%20https://github.com/Ronin1702/Book-Search-Engine)

- GitHub Repo : [Book-Search-Engine](https://github.com/Ronin1702/Book-Search-Engine)
- HeroKu Deployed Link : [Book Search Engine: B.S.E.](https://bse-9db92fa44301.herokuapp.com/)

[_back to top_](#table-of-contents)

## License

- This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).

[_back to top_](#table-of-contents)

---

[![Copyright](https://img.shields.io/static/v1.svg?label=Book%20Search%20Engine%20©️%20&message=%202023%20Kai%20Chen&labelColor=informational&color=033450)](https://kaichen-3000.netlify.app)
