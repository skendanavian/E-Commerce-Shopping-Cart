import React from "react";
import store from "./store";
import mountain from "./images/mountain.png";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">
                <img src={mountain} alt="mountain"></img>
                React Mountain Outfitters
              </Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>
              <div>
                <Link to="/admin">Admin Login</Link>
              </div>
              <div> All Rights Reserved - 2020</div>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
