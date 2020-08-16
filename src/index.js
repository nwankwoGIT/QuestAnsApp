import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
ReactDOM.render(  
  <BrowserRouter>
    <Application />
   </BrowserRouter> , 
  document.getElementById('app')
);
