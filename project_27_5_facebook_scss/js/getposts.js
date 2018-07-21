import $ from 'jquery';
import {Post} from './posts.js';

export class GetPosts {
    constructor(message, author, likes) {
        console.log("FeedPost222");
        this.message = message;
        this.author = author;
        this.likes = likes;
        this.uploadPosts();

    }
    uploadPosts() {
        const post = new Post(this.message, this.author, this.likes)
        // document.find('.postsElList').append(post.el);
        $('.postsElList').append(post.el);

    }
}

//module.exports = GetPosts;


