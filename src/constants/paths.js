

export const paths = {
    adventures: '/data/adventures?sortBy=_createdOn%20desc',
    getById: (id) => `/data/adventures/${id}`,
    edit: (id) => `/data/adventures/${id}`,
    deleteStory: (id) => `/data/adventures/${id}`,
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    
}