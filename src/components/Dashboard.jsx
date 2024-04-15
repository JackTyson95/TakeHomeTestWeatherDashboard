
import React from 'react';
import Search from './Search'
import CurrCard from './CurrCard';
import CityCards from './CityCards';
import '../App.css';

const Dashboard = () => {
  return (
      <div className="Dashboard weather-background4">
         <Search/>
         <CurrCard/> 
         <CityCards/>
     </div>
  
  );
};

export default Dashboard;



