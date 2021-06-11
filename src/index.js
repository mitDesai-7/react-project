import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './searchMovie'



ReactDOM.render(
  <div className="container">
    <h1 className="title">Welcome to Movie World</h1>
    <SearchMovie/>
  </div>,
  document.getElementById('root')
);
