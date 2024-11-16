import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservaForm from "./components/ReservaForm";
import ReservaList from "./components/ReservaList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReservaList />} />
                <Route path="/nueva" element={<ReservaForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;