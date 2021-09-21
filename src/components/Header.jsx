import React from 'react';
import '../assets/styles/Header.css'

const Header = () => {

    const [icon, setIcon] = React.useState("bars");

    const showMenu = () => {
        document.querySelector(".header-menu").classList.toggle("active");
        icon == "bars" ? setIcon("cross") : setIcon("bars");
    }

    return (
        <header className="header">
            <div className="hidden" onClick={showMenu}>
                <img id="hiddenImg" className="hidden-img" style={{ display: icon == "bars" ? "inline" : "none" }}  src="http://cdn.onlinewebfonts.com/svg/img_264699.png" />
                <img id="hiddenImg" className="hidden-img" style={{ display: icon == "cross" ? "inline" : "none" }}  src="https://www.shareicon.net/data/512x512/2015/09/17/642337_close_512x512.png" />
            </div>
            <div className="header-menu">
                <div className="header-Item">
                    <img className="headerItem-icon" src="https://1.bp.blogspot.com/-8ZLe8UwNFkU/YJnvOHEYqwI/AAAAAAABjU0/9bsAygpiu4ES97lul8Z_jBgjs44iLHjhwCLcBGAsYHQ/s512/UCL.png" />
                    <span> Champions League </span>
                </div>
                <div className="header-Item">
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" />
                    <span> La Liga </span>
                </div>
                <div className="header-Item">
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" />
                    <span> Serie A </span>
                </div>
                <div className="header-Item">
                    <img className="headerItem-icon" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" />
                    <span> Premier League </span>
                </div>
            </div>
        </header>
    )
}

export { Header };