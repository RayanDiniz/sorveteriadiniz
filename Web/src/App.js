import React from 'react';

import './App.css';
import img_logo from './img/logo00.png';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div class="col-sm-5">
            <img src={img_logo} className="logo" alt="principal" />
            <div className="jumbotron">

              <h1 className="display-4">Olá!</h1>
              <p className="lead">Bem-Vindo a Sorveteria Diniz</p>
              <hr className="my-2" />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};