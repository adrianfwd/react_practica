import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={""} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </Router>
    )
}

export default Routing