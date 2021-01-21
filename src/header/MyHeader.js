import React, { Component } from 'react'
import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'
import './MyHeader.css';

export default class MyHeader extends Component {
    render() {
        return (
            <header>
                <Logo />
                <Navigation />
            </header>
        )
    }
}
