import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './../pages/Home'
import Catalog from './../pages/Catalog';
import Detail from './../pages/Detail';
const ReactRoutes = () => {
    return (
        <Routes>
            <Route path="/:category/search/:keyword" element={<Catalog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
    );
}

export default ReactRoutes;
