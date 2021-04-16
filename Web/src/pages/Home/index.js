import React from 'react';

//import React
import './style.css';
//import Footer from '../../Footer';
//import Navbar from '../../Navbar';
import img_logo from '../../img/logo00.png';


export default function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center text-center">
                <div class="col-sm-5">
                    <img src={img_logo} className="logo" alt="principal"/>
                    <div className="jumbotron">

                        <h1 className="display-4">Olá!</h1>
                        <p className="lead">Bem-Vindo a Sorveteria Diniz</p>
                        <hr className="my-2"/>
                        <a href="./src/pages/Cardapio">Cardápio</a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};