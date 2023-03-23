import { get, post } from "../utils/api";

export function login(loginData) {
    return post('/users/login', loginData);
    //sessionStorage.setItem('user', createSessObj(data));
}

export function register(registerData) {
    return post('/users/register', registerData);
    //sessionStorage.setItem('user', createSessObj(data));
}

export function logout() {
    return get('/users/logout');
}

// const createSessObj = (data) => {
//     return JSON.stringify({
//         accessToken: data.accessToken,
//         email: data.email,
//         username: data.username,
//         _id: data._id
//     })
// }