import React from 'react';
import './styles.css';
import Barra from '../../components/Barra';
import Footer from '../../components/Footer';

export default () => {
    return (
        <>
            <Barra />
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Sorvete no pote 100ml</h2>
                        <p className="lead">Desfrutes dos melhores sabores do mundo por um preço acessivél.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto fundo"></div>
                </div>
                <div className="bg-warning mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Outro título</h2>
                        <p className="lead">E outra descrição mais engraçadinha ainda.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto fundo"></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Outro título</h2>
                        <p className="lead">E outra descrição mais engraçadinha ainda.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto fundo"></div>
                </div>
                <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Outro título</h2>
                        <p className="lead">E outra descrição mais engraçadinha ainda.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto fundo"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}