import React from 'react';

import logo from '../img/logo001.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <h2 className="logo"><a href="https://sorveteriadiniz.com"> <img src={logo} alt="Logo da Sorveteria Diniz"/> </a></h2>
                            <ul>
                                <li><em>Fone</em>: +55 98 3221-3386</li>
                                <li><em>Email</em>: dinizsorveteria@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Local</h5>
                            <ul>
                                <li>Rua Sete de Setembro, 1, <br/>Vila Esperança</li>
                                <li>São Luís, <br/>Maranhão</li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Sobre-nós</h5>
                            <ul>
                                <li><a href="https://sorveteriadiniz.com">Informações da Empresa</a></li>
                                <li><a href="https://sorveteriadiniz.com">Contato</a></li>
                                <li><a href="https://sorveteriadiniz.com">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Suporte</h5>
                            <ul>
                                <li><a href="https://sorveteriadiniz.com">FAQ</a></li>
                                <li><a href="https://sorveteriadiniz.com">Chat</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2 text-center">
                        <h5>Siga-nos nas redes sociais</h5>
                            <div className="social-networks">
                                <icon iconSize="5" url="https://twitter.com/SorveteriaDiniz" icon="twitter" backgroundColor="rgba(0,0,0,0)"></icon>
                                <icon iconSize="5" url="https://www.facebook.com/sorveteriadiniz/" icon="facebook" backgroundColor="rgba(0,0,0,0)"></icon>
                                <icon iconSize="5" url= "https://instagram.com/SorveteriaDiniz" icon="instagram" backgroundColor="rgba(0,0,0,0)"></icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2020 Copyright - Sorveteria Diniz</p>
                </div>
            </footer>
        </div>
    )
};