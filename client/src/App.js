import React from 'react';
import './App.css';
import Inventory from './pages/Inventory';
import Search from "./pages/Search";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import SignIn from "./components/SignIn";


function App() {
  return (
    <Router>
      <Route exact ={true} path="/" component={HomeScreen} />
      <Route path="/home" component={HomeScreen} />
      <Route path="/search" component={Search} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/signin" component={SignIn} />
    </Router>
  );
}
export default App;