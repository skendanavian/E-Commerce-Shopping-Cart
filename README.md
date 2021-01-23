## E-Commerce Shopping Cart

### Built with React, Redux, MongoDB, Auth0 API, React Router

#### Running DB Locally > brew services start mongodb-community

#### Start Server > npm run server

#### Run Frontend > npm start

# The Shoppies - Movie Award Nomination App

## React Mountain Sports - E-Commerce App

- <h5 style="color: #b0965a">Online store with filter, checkout, persistent database and admin authentication to view orders. Deployed on Heroku with a cloud MongoDB.</h5>
- <h5 style="color: #b0965a">Front-end built with React, Redux, React-Router, Auth0 API.</h5>
- <h5 style="color: #b0965a">Back-end built with Node, Express, and MongoDB. Products and Orders accessed on front-end via  REST API routes.</h5>

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

     <p align='center'>Home Page - Products</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/cart.png?raw=true" >
  </p>
  <p align='center'>Individual Product</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/product.png?raw=true" >
  </p>
  </p>
  <p align='center'>Checkout Panel</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/checkout.png?raw=true">
  </p>
  <p align='center'>Order Receipt</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/orderConfirmation.png?raw=true" >
  </p>
  <p align='center'>Admin Login - Auth0</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/adminLogin.png?raw=true" >
  </p>
  <p align='center'>Orders Admin Page</p>
  <p align="center">
  <img src="https://github.com/skendanavian/E-Commerce-Shopping-Cart/blob/master/docs/adminOrders.png?raw=true" >
  </p>

## Project Goals and Challenges

- <h5 style="color: #b0965a">Building this app was a great introduction to Redux, React Router, and MongoDB which were all brand new to me. I also hadn't had much experience with class-based components in react and even though I much prefer hooks/functional components, this was a good chance to get some practice with them before potentially working on a class-based legacy project in the future. This was also my first time using Auth0.</h5>

  ## Some Future Goals and Improvements

- <h5 style="color: #b0965a">There are a lot more features that I would like to add. Here are a few of them.</h5>

- <h5 style="color: #b0965a">1. Functional payment using Stripe at checkout. </h5>
- <h5 style="color: #b0965a">2. A product search bar.</h5>
- <h5 style="color: #b0965a">3. Forms and Buttons in the admin area to add/delete/update products and orders through the UI rather than using Postman. </h5>
- <h5 style="color: #b0965a">4. Convert to functional components/hooks for practice </h5>
- <h5 style="color: #b0965a">5. Send confirmation email to the customer after checkout. </h5>

### Getting Things Running

- Fork and Clone the Repository
- Run <code>npm install</code>

In the project directory, run:

### `npm start` - React Client - localhost:3000

### `npm run server` Node Server - localhost:5000
