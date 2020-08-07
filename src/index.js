
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheet/styles.css';
import './App.css';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <BrowserRouter>
        <TodoApp />          
    </BrowserRouter>,
    document.getElementById('root')
)
*/


import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';
ReactDOM.render(  
    <Application />, 
  document.getElementById('app')
);
