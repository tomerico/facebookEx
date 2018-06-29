class User1 {
  constructor(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }
  
  get fullname() {
    return `${this.name} ${this.lastname}`;
  }
}

class Feed {
  constructor(feedEl){
    this.feedEl = feedEl;
    this.user = new User1('Tomer', 'Dahan');
    this.postButton = this.feedEl.querySelector('.postButton');
    this.textArea = this.feedEl.querySelector('textarea');
    
    this.postButton.addEventListener('click', () => this.createPost());
  }
  
  createPost() {
    let postBody = this.textArea.value;
    // console.log("tomerico", postBody) Is ther a way to see these prints?
    this.textArea.value = '';
    let post = new Post(postBody, this.user);
    this.feedEl.appendChild(post.el);
  }
}

class Post {
  constructor(postBody, author) {
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
                                You and 60 people like it
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
                <div class="imgWrap">
                    <img src=${"\images\\tomer.png"} alt="Tomer Dahan">
                    <button class="removeButton">remove post</button>
                </div>                                                                        
            </div>                                                               
        </div>  

`;
    
    this.removeButton = this.el.querySelector('.removeButton');
    
    this.removeButton.addEventListener('click', () => this.remove());
  }
  
  remove() {
    this.el.parentNode.removeChild(this.el);
  }
}


// let x = document.querySelector('.boxContent');
// console.log(x);
// new Feed(x);


new Feed(document.querySelector('.posts'));