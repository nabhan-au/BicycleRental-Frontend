import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import TableComp from './components/TableComp';


function App() {

  const [mockData, setData] = useState([
    {
      id:1,
      brand: '3T',
      type: 'Touring Bike',
      seat: 1,
      firstname: "John",
      lastname: "Hopps",
    },
    {
      id:2,
      brand: '6ku',
      type: 'Fixed Gear',
      seat: 1,
      firstname: "Joe",
      lastname: "Hopps",
    },
  ])

  return (
    <div className='App'>
      <NavbarComp/>
      <TableComp instances={mockData}/>
    </div>
  );
}

export default App;
