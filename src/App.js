import React from "react";
import store from "./store";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import mountain from "./images/mountain.png";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    };
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

  addToCart = (product) => {
    console.log("clicked");
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">
              <img src={mountain} alt="mountain"></img>
              React Mountain Outfitters
            </a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart
                  createOrder={this.createOrder}
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                />
              </div>
            </div>
          </main>
          <footer>All Rights Reserved - 2020 </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
