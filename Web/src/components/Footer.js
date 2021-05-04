import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../img/logo001.png';

export default () => {
    return (
        <>
            <Container className="py-5">
                <div className="row">
                    <div className="col-12 col-md text-center">
                        <img src={logo} width="30" height="30"/>
                        <small className="d-block mb-3 text-muted">&copy; 2000-2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Algo legal</a></li>
                            <li><a className="text-muted" href="#">Feature aleatória</a></li>
                            <li><a className="text-muted" href="#">Recursos para times</a></li>
                            <li><a className="text-muted" href="#">Coisas para desenvolvedores</a></li>
                            <li><a className="text-muted" href="#">Outra coisa legal</a></li>
                            <li><a className="text-muted" href="#">Último item</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Fontes</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Fonte</a></li>
                            <li><a className="text-muted" href="#">Nome da fonte</a></li>
                            <li><a className="text-muted" href="#">Outra fonte</a></li>
                            <li><a className="text-muted" href="#">Fonte final</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Fontes</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Negócios</a></li>
                            <li><a className="text-muted" href="#">Educação</a></li>
                            <li><a className="text-muted" href="#">Governo</a></li>
                            <li><a className="text-muted" href="#">Jogos</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Sobre</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Equipe</a></li>
                            <li><a className="text-muted" href="#">Locais</a></li>
                            <li><a className="text-muted" href="#">Privacidade</a></li>
                            <li><a className="text-muted" href="#">Termos</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}