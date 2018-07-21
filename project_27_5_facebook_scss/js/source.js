import $ from 'jquery';
import {Feed} from './feed';
// const GetPosts = require('./getposts.js');
import {GetPosts} from "./getposts";
require("../scss/style.scss");

fetch('http://127.0.0.1:6200')
    .then(data =>  data.json())
    .then((res) => {
        localStorage.setItem("res", JSON.stringify(res));
        res.posts.forEach(element => {
            console.log("piccccccc", element.pic);
            const feed = new GetPosts(element.message, element.author, element.likes);
        });
    })
    .catch(function () {
        let values = JSON.parse(localStorage.getItem("res"));
        values.posts.forEach(element => {
            const feed = new GetPosts(element.message, element.author, element.likes);
            
        })
    });






new Feed($('.posts'));




// let x = document.querySelector('.posts');
// console.log("11111", x);

// let y = $('.posts');
// console.log("22222", y);

// new Feed(x);

