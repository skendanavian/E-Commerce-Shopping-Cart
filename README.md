## E-Commerce Shopping Cart

### Built with React, Redux, MongoDB, Auth0 API, React Router

#### Running DB Locally > brew services start mongodb-community

#### Start Server > npm run server

#### Run Frontend > npm start

# The Shoppies - Movie Award Nomination App

## React Mountain Sports - E-Commerce App

- <h5 style="color: #b0965a">Online store with filter, checkout, persistent database and admin authentication to view orders. Deployed on Heroku.</h5>
- <h5 style="color: #b0965a">Front-end built with React, Redux, React-Router, Auth0 API.</h5>
- <h5 style="color: #b0965a">Back-end built with Node, Express, a MongoDB database.</h5>

<h2 style="text-align: center"> Check out the deployed version <a href="https://react-mountain-sports-test.herokuapp.com/">HERE</a></h2>

## Features

- <h5 style="color: #b0965a">Products: Filter by price, view individual products, add items to cart</h5>
- <h5 style="color: #b0965a">Cart: Shows items, count and total cost</h5>
- <h5 style="color: #b0965a">Checkout: submits user/order info into the DB and adds to the admin orders page.</h5>
- <h5 style="color: #b0965a">Admin Page: requires user authentication using Auth0. Access the admin page via the footer sign in. The Heroku login credentials to see the order page are: <br/>
  email: 
  admin@example.com // password: admin-12345
  </h5>

  ## Final Product

      <p align='center'>Home (No search Items or Nominees)</p>
      <p align="center">
        <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/home.png?raw=true" >

      </p>

    </p>
      <p align='center'>Home (With Search Items and  5 Nominees)</p>
       <p align="center">
        <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/homeSearch.png?raw=true" >
      
      </p>

    </p>
      <p align='center'>Submission Animation Page</p>
      <p align="center">
        <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/submission.png?raw=true" >
       
      </p>
    </p>

  ## Design and Development

- <h5 style="color: #b0965a">My goal with this project was to create both a modern and simple UI that reflects the elegance and prestige of a movie award event like the Academy Awards. I wanted it to grab the attention of the user while remaining highly accessible.</h5>

- <h5 style="color: #b0965a">The colors, fonts, text/border shadow, and animations all add to the award nomination experience.</h5>

- <h5 style="color: #b0965a">I wanted the app to be highly functional and fully responsive and placed a large focus on making that happen. The applications makes sure that users can not add more than 5 movie nominations, and also checks all search items agains the nominee list to disable buttons if the title and the year are a match.</h5>

  ## Some Future Goals and Improvements

- <h5 style="color: #b0965a">There are a lot more features that I would like to eventually add to the project. Here are a few of them.</h5>

- <h5 style="color: #b0965a">1. Email Form to send users their nominee lists and implement back end to persist data in a server side DB.</h5>
- <h5 style="color: #b0965a">2. A popup on page load which explains the awards, nomination process and how the site works.</h5>
- <h5 style="color: #b0965a">3. Show Movie Posters and additional information than the title and year. The API offers alot of info and it would be nice to utilize more of it. </h5>
- <h5 style="color: #b0965a">4. Show more than 5 search items at a time. Again, this means a layout change to handle the larger amount of content. </h5>

### Getting Things Running

- Fork and Clone the Repository
- Run <code>npm install</code>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
