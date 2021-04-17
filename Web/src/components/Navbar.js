import React from 'react';

import logo from './img/logo001.png';

import './global.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
            <a className="navbar-brand m-auto" href="https://sorveteriadiniz.com"><img src={logo} alt="Logo" /></a>
            
            <div className="navbar-nav-sm m-auto">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="http://sorveteriadiniz.com/cardapio">Cardápio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://sorveteriadiniz.com/">Nós</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://sorveteriadiniz.com/">Local</a>
                    </li>
                </ul>
            </div>
           
        </nav>
    )
};