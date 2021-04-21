import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgShoppingBag } from 'react-icons/cg';
import { BiFoodMenu } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { ImPriceTags } from 'react-icons/im';
import { AiOutlineStar, AiOutlineShop } from 'react-icons/ai';
import logo from '../img/logo001.png';

export default () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="site-header">
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Sorveteria Diniz logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/cardapio"><BiFoodMenu /> Cardápio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/sobre"><BsInfoCircle /> Sobre</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/precos"><ImPriceTags /> Preços</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/franquia"><AiOutlineShop /> Franquia</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/premium"><AiOutlineStar /> Premium</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="py-2 d-none d-md-inline-block" to="/carrinho"><CgShoppingBag /></Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}