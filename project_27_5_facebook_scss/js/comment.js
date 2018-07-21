
import {Commentbody} from './commentbody.js';

export class Comment {
    constructor(postEl) {
        this.postEl = postEl; //copy the html that posts class
        this.textArea = this.postEl.find('textarea');
        this.el = document.createElement('div');//for holding the comment

        // this.textArea.addEventListener('keypress', function (event) { //event is the event, returned value after the action
        this.textArea.on('keyup', (event) => {
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
        this.textArea.val('');
        let commentBody = new Commentbody(commentText);
        this.postEl.find('.postComments').append(commentBody.el);
    }
}//close class Comment

