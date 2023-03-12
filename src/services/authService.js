import { post  } from "../utils/api";

export async function login(loginData) {
    const data = await post('/users/login', loginData);
    sessionStorage.setItem('user', createSessObj(data));
}

export async function register(registerData) {
    const data = await post('/users/register', registerData);
    sessionStorage.setItem('user', createSessObj(data));
}

const createSessObj = (data) => {
    return JSON.stringify({
        accessToken: data.accessToken,
        email: data.email,
        username: data.username,
        _id: data._id
    })
}