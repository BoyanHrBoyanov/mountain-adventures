

async function request(method, url, data) {
    let host = 'http://localhost:3030';

    let options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        options.headers["X-Authorization"] = user.accessToken;
    }

    try {
        let response = await fetch(host + url, options);
        if (response.ok === false) {
            if (response.status === 403) {
                sessionStorage.removeItem('user');
            }
            let error = await response.json();
            throw new Error(error.message)
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }

}

let get = request.bind(null, 'get');
let put = request.bind(null, 'put');
let post = request.bind(null, 'post');
let patch = request.bind(null, 'patch');
let del = request.bind(null, 'delete');

export {
    get,
    put,
    post,
    patch,
    del
}
