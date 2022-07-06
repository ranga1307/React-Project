import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

                <Link to="/">
                    <h3 className="nav-brand">VENIA</h3>
                </Link>
                <ul className="navbar-nav align-items-center mx-auto">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Women
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Men
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Smart Gear
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Accessories
                        </Link>
                    </li>
                </ul>
                <Link to="" className="ml-3">
                <span>
                    <span className="mr-2">
                    <i className="fas fa-search" />
                    </span>
                    search
                </span>
                </Link>
                <Link to="" className="ml-3">
                <span>
                    <span className="mr-2">
                    <i className="fas fa-user" />
                    </span>
                    sign in
                </span>
                </Link>
                <Link to="" className="ml-3">
                <span>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                </span>
                </Link>
            </NavWrapper> 
        )
    }
}

const NavWrapper = styled.nav`
    background: #fff;
    .nav-link {
        color: #000 !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

