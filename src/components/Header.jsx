import React from 'react';
import '../assets/styles/Header.css'

const Header = ({children}) => (
    <header className="header">
        <ul>
            <li className="header-Item">
                <img className="headerItem-icon" src="https://1.bp.blogspot.com/-8ZLe8UwNFkU/YJnvOHEYqwI/AAAAAAABjU0/9bsAygpiu4ES97lul8Z_jBgjs44iLHjhwCLcBGAsYHQ/s512/UCL.png" />
                <span> Champions League </span>
            </li>
            <li className="header-Item">
                <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" />
                <span> La Liga </span>
            </li>
            <li className="header-Item">
                <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" />
                <span> Serie A </span>
            </li>
            <li className="header-Item">
                <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" />
                <span> Premier League </span>
            </li>
        </ul>
    </header>
)

export { Header };