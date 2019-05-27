import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detalles from './pages/Detalles'; 
import Usuario from './pages/Usuario'; 

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts/:idPost" component={Detalles} />
    <Route path="/users/:idUser" component={Usuario} />
    <Route path='*' component={ () => <h1> Pagina de error. 404 Not found</h1>} />
  </Switch>
)

export default Routes;