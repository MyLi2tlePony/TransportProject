import React from "react";
import "./css/nav.css"
import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/users">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
              </svg>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink activeClassName="selectedTab" className="nav-link" to="/articles">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedTab" className="nav-link" to="/workload">Загрузка оборудования</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedTab" className="nav-link" to="/analitics">Анализ</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink activeClassName="selectedTab" className="nav-link" to="/manual">Руководство</NavLink>
                </li> */}
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div activeClassName="selectedTab" className="nav-link" to="/account">Личный кабинет</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Nav;