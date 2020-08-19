import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Component/MenuComponent'
import { Navbar, NavbarBrand } from 'reactstrap'
import DishDetail from './Component/DishdetailComponent';

function App() {

  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">FoodCart</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
  );
}

export default App;
