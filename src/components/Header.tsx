import * as React from 'react';
import "./Header.scss";

export function Header() {

    return (
        <div className="header flex center">
            <div className="inner">
                <div className="login flex center">
                    <div className="icon"></div>
                    <div className="username">Luc van Kampen</div>
                    <img src="https://blackboard.uantwerpen.be/images/ci/mybb/arrowDown-topnav.png" alt=""/>
                </div>
                <div className="boven o">
                    <div className="logo_container flex o">
                        <div className="logo o">
                            <img src="https://www.winak.be/sites/default/files/lustrum-schild-1-.png" alt="" />
                            <div className="inside"></div>
                        </div>
                        <div className="right flex vertical">
                            <div className="title">WINAK</div>
                            <div className="subtitle">Wiskunde Informatica Natuurkunde Kring</div>
                        </div>
                    </div>
                </div>
                <div className="nav flex">
                    <div className="nav-item selected"><span>Welkom</span></div>
                    <div className="nav-item"><span>Events</span></div>
                    <div className="nav-item"><span>About</span></div>
                    <div className="nav-item"><span>Contact</span></div>
                </div>
            </div>
        </div>
    )
}