export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);//посылает запрос к серверу

        if (!res.ok){//проверяет получили ли ответ от сервера
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }

        return await res.json(); //ответ сервера в джейсон превращает в джаваскриптовый обьект
    }

    getAllPosts = async () => {
        const  res = await this.getResource('/posts/');
        return res;

    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    getAllUsers = async () => {
        const res = await this.getResource('/users/');
        return res;
    }

    _transformPosts = (post) => {
        return{
            src : post.src,
            alt : post.alt
        }
    }
}