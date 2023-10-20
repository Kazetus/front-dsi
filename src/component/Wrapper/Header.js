import React from 'react';

export default function Header() {
    return (
        <header className="bg-success">
            <div className="container text-center d-flex flex-row justify-content-between align-items-center py-2">
                <p className="title mb-0 fs-1">Mon site</p>
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="fs-4 icon-link icon-link-hover navbar-brand" href="/">Accueil</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="fs-4 icon-link icon-link-hover navbar-brand" aria-current="page" href="/login">Connexion</a>
                        </li>
                        <li className="nav-item">
                        <a className="fs-4 icon-link icon-link-hover navbar-brand" href="/register">Inscription</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </header>
    )
}