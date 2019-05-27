import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; //Importamos el enrutador.
import Routes from './routes';

ReactDOM.render(
    <BrowserRouter>  
    <Routes /> 
  </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
