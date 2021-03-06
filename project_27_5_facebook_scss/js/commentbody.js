import $ from 'jquery';

export class Commentbody {
    constructor(commentText) {
        this.likesCounter = 0;
        let actionTime = new Date().toLocaleDateString("en-US");   //setTimeout, setInterval 
        this.el = document.createElement('div');
        this.el.innerHTML = `
        <div class = "commentsWrapper">
            <div class="imgWrap">
                <img src=${"\images\\tomer.png"} alt="Tomer Dahan">
            </div> 
            <div class="commentMsg">${commentText}</div>
            <div class="commentLikeWrapper">
                <div class="likes">
                    <img src=${"\icons\\like_icon_in_circule.png"} alt="like">
                </div>
                <div class="likesCounter">
                    <div class="likesCounterNumber">
                        ${this.likesCounter}
                    </div>
                </div>
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
        if (this.likesCounter === 0) {
            this.el.find('.commentLikeWrapper').style.display = 'none';
        }

        this.addLike();
    }

    addLike() {
        this.likeComment = this.el.find('.likeComment');
        console.log(this.likeComment);

        this.likeComment.addEventListener('click', (event) => {
            event.preventDefault();
            this.el.find('.commentLikeWrapper').style.display = 'flex';
            this.likesCounter += 1;
            this.likes = this.el.find('.likesCounterNumber');
            this.likes.innerText = this.likesCounter;
            console.log("helloooooww", this.likesCounter);
            let likeCounter = new LikeCounter();

        });    
    }
}
