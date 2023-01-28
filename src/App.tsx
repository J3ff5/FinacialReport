import React from 'react';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Statements from "./pages/Statements";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <BrowserRouter>
                <div className="flex flex-col md:flex-row md:w-40 md:h-screen">
                    <Menu/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/statements" element={<Statements/>}/>
                        <Route path="*" element={<div>404</div>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
