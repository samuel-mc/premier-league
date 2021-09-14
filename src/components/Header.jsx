import React from 'react';
import '../assets/styles/Header.css'

const Header = ({children}) => (
    <header className="header">
        {children}
    </header>
)

export { Header };