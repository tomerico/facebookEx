import {User1} from './user.js';
import {Post} from './posts.js';
import {ServerService} from './services.js';
import {GetPosts} from "./getposts";

export class Feed {
    constructor(feedEl) {
        this.fetchFromServer();
        this.feedEl = feedEl; //copy the html that posts class
        this.user = new User1('Tomer', 'Dahan'); //create an instance of user
        this.postButton = this.feedEl.find('.postButton');
        console.log("hhhh", this.postButton);

        this.textArea = this.feedEl.find('textarea');
        this.postButton.on('click', () => this.createPost());
    }

    fetchFromServer()
    {
        ServerService.getMyPost()
        .then(res => {
            res.posts.forEach(element => {
                const feed = new GetPosts(element.message, element.author, element.likes);
            });
        });
    }


    createPost() {
        let postBody = this.textArea.val();
        this.textArea.val('');
        let post = new Post(postBody, this.user);
        this.feedEl.append(post.el);
    }
}

