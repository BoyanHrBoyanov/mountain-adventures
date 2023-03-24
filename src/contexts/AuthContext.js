import { createContext, useContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";


import { login, logout, register } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
	const navigate = useNavigate();
    const [user, setUser] = useSessionStorage('user', {});

    const onLogin = async (data) => {
        const responseData = await login(data);
        setUser(JSON.parse(createSessObj(responseData)));
        navigateFunc();
    };

    const onRegister = async (data) => {
        const responseData = await register(data);
        setUser(JSON.parse(createSessObj(responseData)));
        navigateFunc();
    };

    const onLogout = async () => {
        await logout();
        setUser({});
    }

    const createSessObj = (data) => {
        return JSON.stringify({
            accessToken: data.accessToken,
            email: data.email,
            username: data.username,
            _id: data._id
        })
    };

    const navigateFunc = () => {
        if (sessionStorage.getItem('to')) {
			navigate(sessionStorage.getItem('to'));
			sessionStorage.removeItem('to');
		} else {
			navigate("/");
		}
    }

    const contextValues = {
        onLogin,
        onRegister,
        onLogout,
        user: Object.keys(user).length === 0 ? null : user
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};