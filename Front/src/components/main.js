import React from "react";
import "./css/main.css";

function Main (props) {
    return (
        <main className="container">
            <div>
                { props.children }
            </div>
        </main>
    );
}

export default Main;