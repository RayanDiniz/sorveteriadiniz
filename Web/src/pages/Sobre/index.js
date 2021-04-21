import React from 'react';
import { Container } from 'react-bootstrap';

import Barra from '../../components/Barra';
import Footer from '../../components/Footer';

export default () => {
    return (
        <>
            <Barra />

            <h1 className="display-4">Olá!</h1>
            <p className="lead">Bem-Vindo a Sorveteria Diniz</p>
            <hr className="my-2" />

            <Footer />
        </>
    )
}
