import React from 'react';
import * as Reactbootstrap from 'react-bootstrap';
import './Navbar.css';
import { motion } from 'framer-motion';
import { LinkContainer } from 'react-router-bootstrap';

//NavigationBar
const Navbar = () => {
    return (
        <div className="NavigationBar">
            <Reactbootstrap.Navbar collapseOnSelect expand="sm" variant="light">
                <LinkContainer to="/"><Reactbootstrap.Navbar.Brand href="#home" className="logo"><b><span className="sparks">Sparks</span> <span className='bank'>Bank</span></b></Reactbootstrap.Navbar.Brand></LinkContainer>
                <Reactbootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Reactbootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <Reactbootstrap.Nav className="mr-auto home-history">
                        <LinkContainer to="/"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{ borderBottom: "2.5px solid #000000" }}>Home</motion.div></Reactbootstrap.Nav.Link></LinkContainer>
                        <LinkContainer to="/users"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{ borderBottom: "2.5px solid #000000" }}>Users</motion.div></Reactbootstrap.Nav.Link></LinkContainer>
                        <LinkContainer to="/transactions"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{ borderBottom: "2.5px solid #000000" }}>Transactions</motion.div></Reactbootstrap.Nav.Link></LinkContainer>
                    </Reactbootstrap.Nav>
                </Reactbootstrap.Navbar.Collapse>
            </Reactbootstrap.Navbar>
        </div>

    );
}

export default Navbar;