import React from 'react';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import {router} from "./Routes";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="flex flex-col md:flex-row md:w-40 md:h-screen">
                <Menu/>
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
