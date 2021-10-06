import React from 'react';
import '../assets/styles/Header.css'

const Header = ({setLeagueSelected}) => {

    const [icon, setIcon] = React.useState("bars");

    const showMenu = () => {
        document.querySelector(".header-menu").classList.toggle("active");
        icon === "bars" ? setIcon("cross") : setIcon("bars");
    }

    const handleClick = (event) => {
        setLeagueSelected(event.target.id);
    }

    return (
        <header className="header">
            <div className="hidden" onClick={showMenu}>
                <img id="hiddenImg" className="hidden-img" style={{ display: icon === "bars" ? "inline" : "none" }}  src="http://cdn.onlinewebfonts.com/svg/img_264699.png" />
                <img id="hiddenImg" className="hidden-img" style={{ display: icon === "cross" ? "inline" : "none" }}  src="https://www.shareicon.net/data/512x512/2015/09/17/642337_close_512x512.png" />
            </div>
            <div className="header-menu">
                <button id="2001" className="header-Item" onClick={handleClick}>
                    <img className="headerItem-icon" src="https://1.bp.blogspot.com/-8ZLe8UwNFkU/YJnvOHEYqwI/AAAAAAABjU0/9bsAygpiu4ES97lul8Z_jBgjs44iLHjhwCLcBGAsYHQ/s512/UCL.png" alt="Champions League Logo" />
                    Champions League
                </button>
                <button id="2014" className="header-Item" onClick={handleClick}>
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="Spanish flag"/>
                    La Liga
                </button>
                <button id="2019" className="header-Item" onClick={handleClick}>
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="Italian flag" />
                    Serie A
                </button>
                <button id="2021" className="header-Item" onClick={handleClick}>
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="England flag"/>
                    Premier League
                </button>
            </div>
        </header>
    )
}

export { Header };