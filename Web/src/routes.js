import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Cardapio from './pages/Cardapio';
import Franquia from './pages/Franquia';
import Precos from './pages/Precos';
import Premium from './pages/Premium';
import Carrinho from './pages/Carrinho';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Inicio} exact />
            <Route path="/sobre" component={Sobre} exact />
            <Route path="/cardapio" component={Cardapio} exact />
            <Route path="/franquia" component={Franquia} exact />
            <Route path="/precos" component={Precos} exact />
            <Route path="/premium" component={Premium} exact />
            <Route path="/carrinho" component={Carrinho} exact />
        </BrowserRouter>
    )
}