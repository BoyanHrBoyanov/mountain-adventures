import { get, post } from "./api.js"; //del, , put

let endpoints = {
    'getAll': '/jsonstore/adventures',
    'create': '/data/albums',
    'getById': '/data/albums/',
    // 'edit': '/data/albums/',
    // 'delete': '/data/albums/',
    // 'getLikes': (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    // 'likesFromUser': (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    // 'like': `/data/likes`,
    // 'test': '/data/favourites'
}

export async function getAllItems() {
    return await get(endpoints.getAll);
}

export async function createItem(obj) {
    post(endpoints.create, obj)
}

export async function getById(id) {
    return await get(endpoints.getById + id);
}

// export async function editItem(id, data) {
//     return await put(endpoints.edit + id, data);
// }

// export async function deleteItem(id) {
//     return await del(endpoints.delete + id);
// }

// export async function getLikes(albumId) {
//     return await get(endpoints.getLikes(albumId));
// }

// export async function likesFromUser(id, userId) {
//     return await get(endpoints.likesFromUser(id, userId));
// }

// export async function addLike(albumId) {
//     return await post(endpoints.like, { albumId });
// }