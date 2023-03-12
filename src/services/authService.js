import { post  } from "../utils/api";

export async function login(loginData) {
    const data = await post('/users/login', loginData);
    sessionStorage.setItem('user', JSON.stringify(data));
}