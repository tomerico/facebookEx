
class Feed {
    constructor(feedEl) {
        this.feedEl = feedEl; //copy the html that posts class
        this.user = new User1('Tomer', 'Dahan'); //create an instance of user
        this.postButton = this.feedEl.querySelector('.postButton');
        console.log("hhhh", this.postButton);

        this.textArea = this.feedEl.querySelector('textarea');
        this.postButton.addEventListener('click', () => this.createPost());
    }

    createPost() {
        let postBody = this.textArea.value;
        this.textArea.value = '';
        let post = new Post(postBody, this.user);
        this.feedEl.appendChild(post.el);
    }
}