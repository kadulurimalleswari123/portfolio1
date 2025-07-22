import React from "react";
import './App.css';
import Name from "./Components/Name";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";


function App() {
    return (
        <div class="box">
            <Name/>
            <About/>
            <Project/>
            <Contact/>
        </div>
    );
}

export default App;