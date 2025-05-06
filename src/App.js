import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import routes from './routes';

function App() {
    const showContentMenu = (routes) => {
      let result = null;
      if(routes.length > 0) {
        result = routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        });
      }
      return result;
    }

    return (
      <BrowserRouter>
        <div style={{ margin: '20px' }}>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li><NavLink to={'/'} className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink></li>
              <li><NavLink to={'/contact'} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
              <li><NavLink to={'/about'} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
            </ul>
          </nav>  
            <hr />
            <Routes>  
              {showContentMenu(routes)}
            </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  

export default App;




