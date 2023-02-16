import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import "./css/style.css";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Audio from "./pages/Audio";
import Software from "./pages/Software";
import Acrobatics from "./pages/Acrobatics";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="software" element={<Software />} />
                    <Route path="audio" element={<Audio />} />
                    <Route path="acrobatics" element={<Acrobatics />} />
                    {/* <Route path="contact" element={<Contact />} /> */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}