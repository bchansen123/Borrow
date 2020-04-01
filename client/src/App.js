import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn"; 
import Search from "./pages/Search";
import Inventory from "./pages/Inventory"; 


// import React from 'react';
import './App.css';
import {Container} from "./components/BsGlobal";
import UserMenu from "./components/UserMenu";
import PageMenu from "./components/PageMenu";

// import Inventory from './pages/Inventory';


function App() {
  return (
    // <React.Fragment>
    //   <UserMenu />
    //   <PageMenu />
    //   <Container>
    //   <Inventory />
    //   </Container>
    // </React.Fragment>

    // FRONT END route (express, is the backend)
    <Router>
      <div>
   
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/inventory/:id" component={Inventory} />
       
        </Switch>
      </div>
    </Router>

  );
}
export default App;
