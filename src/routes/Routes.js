import React from 'react';
import { Route, Routes } from "react-router-dom";
import { config } from '../pages/config';

const RoutesProviders = () => {
    return (
        <Routes>
            {
                config?.map(({element, path, Layout}, index) => (
                    <Route key={index} path={path} element={<Layout>{element}</Layout>} />
                ))
            }
        </Routes>
    );
}

export default RoutesProviders;