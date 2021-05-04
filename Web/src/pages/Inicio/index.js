import React from 'react';
import {FaGooglePlay, FaApple} from 'react-icons/fa';
import Barra from '../../components/Barra';
import Footer from '../../components/Footer';

export default () => {
    return (
        <>
            <Barra />

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-0 text-center bg-secondary">
                <div className="col-md-5 p-lg-5 mx-auto my-5 text-light">
                    <h1 className="display-4 font-weight-normal">O Sabor está em suas mãos!</h1>
                    <p className="lead font-weight-normal">Bem-Vindo a Sorveteria Diniz, estamos a 11 anos no mercado oferecendo os melhores sabores de sorvete do mundo.</p>
                    <a className="btn btn-outline-warning" href="https://play.google.com/store/apps/details?id=com.myvideohunter.video_hunter_app&hl=en">Baixe o App</a>
                    <h1 className="lead font-weight-normal"><FaGooglePlay /> <FaApple /></h1>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <Footer />
        </>
    )
}
