import { get, post } from "../utils/api";
import { paths } from "../constants/paths";

export function login(loginData) {
    return post(paths.login, loginData);
}

export function register(registerData) {
    return post(paths.register, registerData);
}

export function logout() {
    return get(paths.logout);
}