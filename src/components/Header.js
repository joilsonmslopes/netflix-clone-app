import React from "react";
import "./Header.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <header className={props.black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img
                        src="https://i.ibb.co/hftFRkj/netflix-official-logo-icon-168085.png"
                        alt="netflix"
                    />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img
                        src="https://i.ibb.co/jL9tQcn/user-logo.png"
                        alt="user-logo"
                    />
                </a>
            </div>
        </header>
    );
};
