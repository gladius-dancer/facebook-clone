import * as React from "react";
import "./assets/scss/App.scss";
import "bootstrap/scss/bootstrap.scss";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Test from "./pages/Test/Test";
import Modal from "react-modal";

Modal.setAppElement("#root");


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/second/:id" element={<Test/>}/>
        </Routes>
    </BrowserRouter>
);

export default App;
