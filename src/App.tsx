import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="wrapper">
            <Sidebar />
            <main style={{ width: "100%" }}>
                <Header />
                <Main />
            </main>
        </div>
    );
}

export default App;
