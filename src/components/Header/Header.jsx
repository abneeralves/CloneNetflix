import React from "react";
import './Header.css'
import logoNet from "/public/NetflixLogo.png"
import fotoAbner from "/public/Abner.jpg"

const Header = ({efeito}) => {
    return (
        <header className={efeito ? 'Efeito' : ''}>
            <div className="logoNet">
                <a href="/">
                    <img src={logoNet} alt="Logo Netflix" />  
                </a>
            </div>
            <div className="Usuario">
                <a href="/">
                    <img src={fotoAbner} alt="Foto Abner" />
                </a>

            </div>
            
        </header>
    )

}

export default Header