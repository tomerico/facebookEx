//const $ = require('jquery');
const Feed = require('./feed.js');
const GetPosts = require('./getposts.js');

fetch('http://127.0.0.1:6200')
    .then((data) => {
        console.log("hello1112", data);
        data.json()
            .then((res) => {
                localStorage.setItem("res", JSON.stringify(res));
                res.posts.forEach(element => {
                    console.log("piccccccc", element.pic);
                    const feed = new GetPosts(element.message, element.author, element.likes);
                });
            });
    }).catch(function () {
        let values = JSON.parse(localStorage.getItem("res"));
        values.posts.forEach(element => {
            const feed = new GetPosts(element.message, element.author, element.likes);
            
        })
    });


new Feed(document.querySelector('.posts'));

