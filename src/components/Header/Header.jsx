import React from "react";
import './Header.css'
import logoNet from "../../assets/NetflixLogo.png"
import fotoAbner from "../../assets/Abner.jpg"

const Header = ({efeito}) => {
    return (
        <header className={efeito ? 'Efeito' : ''}>
            <div className="logoNet">
                <a href="/">
                    <img src={logoNet} alt="" />  
                </a>
            </div>
            <div className="Usuario">
                <a href="/">
                    <img src={fotoAbner} alt="" />
                </a>

            </div>
            
        </header>
    )

}

export default Header