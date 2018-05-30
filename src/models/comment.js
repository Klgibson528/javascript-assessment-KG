let Comment_all = [];
let Comment_id = 0; 

class Comment {
    constructor(comment, imageId) {
        this.id = Comment_id++;
        this.commentText = comment;
        this.image = this.findImage(imageId);
        Comment_all.push(this);
    }

    findImage(imageId) {
        let imageObj = undefined;
        Image.all.forEach(image => {
            if (image && image.id === imageId) {
                imageObj = image;
            }
        });
        if (!imageObj) {
            throw 'imageId invalid';
        }

        const thisComment = this;
        let added = false;
        imageObj.comments.forEach(imageComment => {
            added = added || thisComment.id === imageComment.id;
        });
        if (!added) {
            imageObj.comments.push(thisComment);
        }

        return imageObj;
    }

    commentEl() {
        return `
      <li id="${this.id}">
        ${this.commentText}
      </li>
    `;
    }
}