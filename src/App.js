import React from "react";
import store from "./store";
import mountain from "./images/mountain.png";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import AuthenticationButton from "./components/AuthenticationButton";
import LoginButton from "./components/LoginButton";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <div className="grid-container">
              <header>
                <Link to="/">
                  <img src={mountain} alt="mountain"></img> React Mountain
                  Sports
                </Link>
              </header>
              <main>
                <Route path="/admin" component={AdminScreen} />

                <Route path="/" component={HomeScreen} exact />
              </main>
              <footer>
                <div>
                  {/* <AuthenticationButton> */}
                  <Link to="/admin">Admin </Link>
                  <LoginButton></LoginButton>
                  {/* </AuthenticationButton> */}
                </div>
                <div> All Rights Reserved - 2020</div>
              </footer>
            </div>
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
