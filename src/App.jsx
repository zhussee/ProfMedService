import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors.jsx";
import PublicOffer from "./pages/PublicOffer";
import Services from "./pages/Services";
import {Suspense} from "react";

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/public-offer" element={<PublicOffer />} />
                <Route path="/catalog" element={<Services />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;