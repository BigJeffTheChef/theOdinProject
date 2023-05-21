import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Layout from "../components/Layout";
import Home from "../components/Home";
import Shop from "../components/Shop";
import React from "react";

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<Layout bodyComponent={<Home />} />}
            />
            <Route
                path='/shop'
                element={<Layout bodyComponent={<Shop />} />}
            />
        </Routes>
    </BrowserRouter>
);

export default MainRouter;