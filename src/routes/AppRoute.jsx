import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';


const AppRouter = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                </ProtectedRoute>
            }
        />
        <Route path="*" element={<p>Page not found</p>} />

    </Routes>
);

export default AppRouter;
