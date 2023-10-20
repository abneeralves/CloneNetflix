import React from "react";
import './Header.css'

const Header = ({efeito}) => {
    return (
        <header className={efeito ? 'Efeito' : ''}>
            <div className="logoNet">
                <a href="/">
                    <img src="./public/NetflixLogo.png" alt="" />  
                </a>
            </div>
            <div className="Usuario">
                <a href="/">
                    <img src="./public/Abner.jpg" alt="" />
                </a>

            </div>
            
        </header>
    )

}

export default Header