const baseUrl = 'https://julio22b-blog-api-1.glitch.me/api/';

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
