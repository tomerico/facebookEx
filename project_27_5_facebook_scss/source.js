class User1 {
    constructor(name, lastname){
      this.name = name;
      this.lastname = lastname;
    }
    
    get fullname() {
      return `${this.name} ${this.lastname}`;
    }
  }

fetch('http://127.0.0.1:6200')
    .then((data) => {
        console.log("hello1112", data);  
        data.json()
        .then((res) => {
            localStorage.setItem("res", JSON.stringify(res)); 
            res.posts.forEach(element => {    
                console.log("piccccccc", element.pic);    
                const feed = new getPosts(element.message, element.author, element.likes);
            });
        });
    }).catch(function() {
        let values = JSON.parse(localStorage.getItem("res"));
        values.posts.forEach(element => { 
            const feed = new getPosts(element.message, element.author, element.likes);
        })
    });


class getPosts{
    constructor(message, author, likes){
        console.log("FeedPost222");
        this.message=message;
        this.author=author;   
        this.likes=likes;             
        this.uploadPosts();

    }
    uploadPosts(){
        const post = new Post(this.message, this.author, this.likes)
        document.querySelector('.postsElList').appendChild(post.el);
      }
}

class Feed {
  constructor(feedEl){
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

class Post {
  constructor(postBody, author, likes) {
    console.log("fullllnameee", author); 
    this.el = document.createElement('article');
    this.el.innerHTML = `
        <div class="postsEl">
            <div class="postsElHeader">
                <div class=stroriesItem>
                        <span class="name">${author.fullname}</span> 
                        <span class="msg">was tagged in this</span>  
                                                           
                </div>
                <div class=iconItem>
                         
                        <a href="#"><img src=${"\icons\\dotsmenu.png"}></a>
                        <ul class="postDotsMenu">
                            <li> 
                                <button class="removeButton">remove post</button>
                            </li>
                        </ul>   
                                                                                  
                </div>                                    
            </div>
            <div class="seperator">
            
            </div>

            <div class="postsElMsg">

                <div class="peopleNote">
                    <div class="peoplePostImg">
                        <img src=${"\images\\dafiyuvi.png"} alt="Dafna Avni">
                    </div>
                    <div class="whoWhenUploaded">
                        <div class="peopleName">
                            Dafna Avni
                        </div>
                        <div class="uploadingTime">
                            5 hours
                        </div>
                        <div class="messageWrapper"> 
                            <div class="postMessage">
                                    ${postBody}
                            </div>                                                   
                        </div>
                    
                    </div>
                </div>
                    
                <div class="postsElpic">
                    <img src=${"\images\\yuval_birthday_.png"} alt="yuval birthday">
                </div>

                <div class="actionSummary">
                    <div class="summaryIconsAndLike">
                            <div class="summaryIcons">
                                    <img src=${"\icons\\summary_icons.png"}>
                            </div>                                               
                            <div class="whoLikeIt">
                                You and ${likes} people like it
                            </div>                     
                    </div>
                    <div class="numberOfComments">
                            4 comments
                    </div>                                        

                </div>
                <div class="seperator"></div>

                <div class="callToAction">
                    <div class="actionItem">
                        <div class="actionItemIcon">
                            <img src=${"\icons\\thumb-up.png"} alt="Like">
                        </div>
                        <div class="actionItemName">
                            Like
                        </div>
                    </div>  
                    <div class="actionItem"> 
                        <div class="actionItemIcon">
                                <img src=${"\icons\\comment.png"} alt="Comment">
                        </div>    
                        <div class="actionItemName">
                            Comment
                        </div> 
                    </div>
                    <div class="actionItem"> 
                        <div class="actionItemIcon">
                                <img src=${"\icons\\share.png"} alt="Share"}>
                        </div>                                                 
                        <div class="actionItemName">
                            Share
                        </div>                                                                                                 
                    </div>
                </div> 
                <div class="seperator"></div>
                <div class="postComments">
                </div>

                <div class="addCommentWrapper">
                    <div class="imgWrap">
                        <img src=${"\images\\tomer.png"} alt="Tomer Dahan">
                    </div> 
                    <div class="writeComment">
                        <textarea placeholder="Write a comment"></textarea>
                    </div> 
                </div>                                 
            </div>                                                               
        </div>  

`;
    
    this.removeButton = this.el.querySelector('.removeButton');
    this.removeButton.addEventListener('click', () => this.remove());
    this.addComment();
  }

  addComment(){
    new Comment(this.el.querySelector('.postsEl'));
  }
  
  remove() {
    this.el.parentNode.removeChild(this.el);
  }
}

class Comment{
    constructor(postEl){
        this.postEl = postEl; //copy the html that posts class
        this.textArea = this.postEl.querySelector('textarea');
        this.el = document.createElement('div');//for holding the comment
  
        // this.textArea.addEventListener('keypress', function (event) { //event is the event, returned value after the action
        this.textArea.addEventListener('keyup', (event) => {
            let key = event.which || event.keyCode;
            if (key === 13) // 13 is enter
            { 
                //debugger; 
                this.createComment(event.target.value);

            }
        });
    }//close constructor 
      
    createComment(commentText) {
        debugger;
        console.log("addcommenttttttttt", commentText);  
        this.textArea.value = '';
        let commentBody = new Commentbody(commentText);
        this.postEl.querySelector('.postComments').appendChild(commentBody.el);
    }    
}//close class Comment

class Commentbody
{
    constructor(commentText){
    this.likesCounter = 0;    
    let actionTime = new Date();    
    this.el = document.createElement('div');
    this.el.innerHTML = `
        <div class = "commentsWrapper">
            <div class="imgWrap">
                <img src=${"\images\\tomer.png"} alt="Tomer Dahan">
            </div> 
            <div class="commentMsg">${commentText}</div>
            <div class="likes">
                <img src=${"\icons\\like_icon_in_circule.png"} alt="like">
            </div>
            <div class="likesCounter">
                ${this.likesCounter}
            </div>
        </div>
        <div class="actionToComment">
            <div class="likeComment">
                <a href="#">like</a>
            </div>
            <div class="replyToComment">
                <a href="#">reply</a>
            </div>   
            <div class="actionTime">
                ${actionTime}
            </div>                      
        </div>
    `;
    this.addLike(this.likesCounter);  
    } 
    
    addLike()
    {
        this.likeComment=this.el.querySelector('.likeComment');
        console.log(this.likeComment);
        this.likeComment.addEventListener('click', (event) => {
            event.preventDefault();
            this.likesCounter +=1;

            console.log("helloooooww", this.likesCounter);
            let likeCounter = new LikeCounter();

        });
        // console.log("tomerrrrrrrrrr",this.counter);       
    }
}

class LikeCounter
{
  constructor(){
    console.log("tommmmmmmmmmer");
  }


}

// let x = document.querySelector('.boxContent');
// console.log(x);
// new Feed(x);

localStorage.setItem("hello123", "58");
let x = localStorage.getItem("hello123");
// window.alert(x);

new Feed(document.querySelector('.posts'));

// new Comment(document.querySelector('.postsEl'));