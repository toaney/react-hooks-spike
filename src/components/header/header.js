import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="nav-container">
            {/* <img className="header-logo" src={"../../assets/images/ESLLLogo.webp"} alt="espark logo" /> */}
            <div className="header-logo"><Link className="more-articles-link" to="/"><img src="https://cdn.esparklearning.com/assets/espark-header-logo--white-2065e63a63253d647c7d48cd27df9b6fbc2b584fd008e0e032cc3f1c2149e027.svg"/></Link></div>
                <nav>
                    <span className="header-nav-list">
                        <span className="header-nav-link"><Link className="more-articles-link" to="/assignments">D3 Graph</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/local_state">Local State</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/redux_state">Redux State</Link></span>
                    </span>
                </nav>
            </div>
            <aside className="header-login-container">
                {/* header-login-link is purely cosmetic and won't work */}
                <span className="header-login-link"></span>
            </aside>
        </header>
    )
}

export default Header;