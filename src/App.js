import React from "react";
import store from "./store";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import mountain from "./images/mountain.png";
import { Provider } from "react-redux";

class App extends React.Component {
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
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
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
