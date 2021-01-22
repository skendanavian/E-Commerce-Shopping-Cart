import React from "react";
import store from "./store";
import mountain from "./images/mountain.png";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import AuthenticationButton from "./components/AuthenticationButton";
import BeatLoader from "react-spinners/BeatLoader";
import { withAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

class App extends React.Component {
  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return (
        <div className="loader">
          {" "}
          <BeatLoader size={15} margin={5} color={"green"} loading={true} />
        </div>
      );
    }
    return (
      <Provider store={store}>
        {/* <BrowserRouter>
          <Auth0ProviderWithHistory> */}
        <div className="grid-container">
          <header>
            <Link to="/">
              <img src={mountain} alt="mountain"></img> React Mountain Sports
            </Link>
          </header>
          <main>
            <Switch>
              <ProtectedRoute path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </Switch>
          </main>
          <footer>
            <div>
              <AuthenticationButton>
                <Link to="/admin">Admin </Link>
              </AuthenticationButton>
            </div>
            <div> All Rights Reserved - 2020</div>
          </footer>
        </div>
        {/* </Auth0ProviderWithHistory>
        </BrowserRouter> */}
      </Provider>
    );
  }
}

// export default withAuth0(App);
export default withAuth0(App);
