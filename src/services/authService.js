import { get, post } from "../utils/api";
import { paths } from "../constants/paths";

export function login(loginData) {
    return post(paths.login, loginData);
}

export function register(registerData) {
    if (registerData.password !== registerData.repass) {
        throw new Error('Password missmatch!')
    }
    return post(paths.register, registerData);
}

export function logout() {
    return get(paths.logout);
}