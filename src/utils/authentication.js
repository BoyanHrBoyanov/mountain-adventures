import React from "react";
import { redirect } from "react-router-dom";

export const withAuth = (WrappedComponent) => {
    const AuthRoute = (props) => {
        const isAuthenticated = sessionStorage.getItem('user');
        if (!isAuthenticated) {
            return redirect("/login");
        }
        return <WrappedComponent {...props} />
    };
    return AuthRoute
}