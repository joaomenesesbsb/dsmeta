import logo from '../../assets/img/logo.svg';

import "./styles.css";

function header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por João victor
                </p>
            </div>
        </header>
    )
}

export default header;
