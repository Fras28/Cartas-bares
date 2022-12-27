import React from 'react';
import {  Route,Switch} from 'react-router-dom';
import Landing from "./Components/Landing/LandingPage.jsx"
import './App.css';
import { Cafeteria } from './Components/Cafeteria/Cafeteria.jsx';
import { Foot } from './Components/Footer/Footer.jsx';
import { Comidas } from './Components/Comidas/Comidas';
import { Bag } from './Components/myBag/myBag.jsx';
import { MyFoot } from './Components/myFoot/MyFooter.jsx';
import { VerPedido } from './Components/BtnBag/BtnBag.jsx';


function App() {

  return (
    <div className="App">
<Switch>
          <Route exact path="/:id?" component={Landing}/>
          <Route exact path="/:id/Cafeteria" component={Cafeteria}/>
          <Route exact path="/:id/Comidas" component={Comidas}/>
          <Route exact path="/:id/Bag" component={Bag}/>
</Switch>
<VerPedido/>
  <Foot/>
  <MyFoot/>
    </div>
  );
}

export default App;
