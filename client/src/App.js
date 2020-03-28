import React from 'react';
import './App.css';
import {Container} from "./components/BsGlobal";
import UserMenu from "./components/UserMenu";
import PageMenu from "./components/PageMenu";
import Inventory from './pages/Inventory';


function App() {
  return (
    <React.Fragment>
      <UserMenu />
      <PageMenu />
      <Container>
      <Inventory />
      </Container>
    </React.Fragment>
  );
}
export default App;