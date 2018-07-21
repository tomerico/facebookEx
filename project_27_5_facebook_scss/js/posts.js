import $ from 'jquery';
let Comment = require('./comment.js');

export class Post {
    constructor(postBody, author, likes) {
        console.log("fullllnameee", author);
        // this.el = document.createElement('article');
        this.el = $("<article></article>").html(`
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
                <div>
                    <button class="removeButton">remove post2</button>  
                </div>                               
            </div>                                                               
        </div>  

`);
        
        this.removeButton = this.el.find('.removeButton');
        this.removeButton.on('click', () => this.remove());
        this.addComment();
    }

    addComment() {
        let comment = new Comment(this.el.find('.postsEl'));
        // this.comments.push(comment);
    }

    remove() {
        this.el.parentNode.removeChild(this.el);
    }
}
