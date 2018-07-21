let User1 = require('./user.js');
import {Post} from './posts.js';

export class Feed {
    constructor(feedEl) {
        this.feedEl = feedEl; //copy the html that posts class
        this.user = new User1('Tomer', 'Dahan'); //create an instance of user
        this.postButton = this.feedEl.find('.postButton');
        console.log("hhhh", this.postButton);

        this.textArea = this.feedEl.find('textarea');
        this.postButton.on('click', () => this.createPost());
    }

    createPost() {
        let postBody = this.textArea.val();
        this.textArea.val('');
        let post = new Post(postBody, this.user);
        this.feedEl.append(post.el);
    }
}