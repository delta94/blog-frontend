const baseUrl = 'http://localhost:4000/api/';

const getAll = async () => {
    const request = await fetch(`${baseUrl}/posts`);
    const posts = await request.json();
    return posts;
};

const getOne = async (id) => {
    const request = await fetch(`${baseUrl}/post/${id}`);
    const post = await request.json();
    return post;
};

export default {
    getAll,
    getOne,
};
