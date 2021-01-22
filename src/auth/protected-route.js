import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import BeatLoader from "react-spinners/BeatLoader";

class ProtectedRoute extends React.Component {
  render() {
    return (
      <Route
        component={withAuthenticationRequired(this.props.component, {
          onRedirecting: () => (
            <div className="loader">
              {" "}
              <BeatLoader size={15} margin={5} color={"green"} loading={true} />
            </div>
          ),
        })}
        {...this.props.args}
      />
    );
  }
}

export default ProtectedRoute;
