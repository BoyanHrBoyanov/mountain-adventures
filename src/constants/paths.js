

export const paths = {
    adventures: '/data/adventures?sortBy=_createdOn%20desc',
    getById: (id) => `/data/adventures/${id}`,
    edit: (id) => `/data/adventures/${id}`,
    deleteStory: (id) => `/data/adventures/${id}`,
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    getComments: (storyId) => `/data/comments?where=storyId%3D%22${storyId}%22`,
    postComment: '/data/comments',
    delComment: (id) => `/data/comments/${id}`,
    editComment: (id) => `/data/comments/${id}`,
    
}