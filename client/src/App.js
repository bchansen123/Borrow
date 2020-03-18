import React from "react";
import logo from "./logo.svg";
import GoogleLogin from "react-google-login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import "./App.css";

const home = () => <h2>HOME</h2>;
const about = props => {
  console.log(props.match.params.id);
  return <h2>ABOUT</h2>;
};
const notFound = () => <h2>404</h2>;
const protected2 = () => <h2>DASH</h2>;

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} {...rest} user={user} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
      // : <Redirect to='/' />}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const id = localStorage.getItem("id");
    this.state = {
      loggedIn: id ? true : false
    };
  }

  componentDidMount() {
    //api calls here
    //set response to state
  }

  responseGoogle = res => {
    console.log(res);
    localStorage.setItem("id", res.googleId);
    this.setState({
      loggedIn: true
    });
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src="./logo.svg" className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
              <Link to="/">Go Home</Link> |<Link to="/about">About</Link> |
              <Link to="/dash">Dashboard</Link>
            </div>
            {this.state.loggedIn ? (
              <button onClick={this.logout}>Logout</button>
            ) : (
              // ? <Link to="/dash">Go to Dashboard</Link>
              <GoogleLogin
                clientId="848085670390-lfja2n5np9q6517epvhp4rrbi86gh500.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
            )}
          </header>
          <Route exact path="/" component={home} />
          <Route exact path="/about/:id" component={about} />
          <PrivateRoute
            user={this.state.loggedIn}
            exact
            path="/dash"
            component={protected2}
          />
          {/* look up defaults/switch */}
          <Route component={notFound} />
        </div>
      </Router>
    );
  }
}

export default App;
