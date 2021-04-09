import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';


import HomePage from './pages/homepage/homepage.component';


const Hatspage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

const Jacketspage = () => (
  <div>
    <h1> JACKET PAGE </h1>
  </div>
)

function App() {
  return(
     <div> 
       <Switch>
         <Route exact path='/' component ={HomePage} />
         <Route path='/hats' component={Hatspage} />
         <Route path='/jackets' component={Jacketspage} />
       </Switch>
      </div>
  );
} 




export default App;