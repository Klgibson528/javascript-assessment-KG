class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener();
  }
  //taken
  addCommentFormListener() {
    [...document.getElementsByClassName('add-comment')].forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const imageId = parseInt(event.target.getAttribute('data-id'));
        const comment = document.getElementById(`comment-description-${imageId}`);
        const newComment = new Comment(comment.value, imageId);
        comment.value = '';
        this.render(newComment);
      }, false);
    });
  }

  render(commentObject) {
    const commentUl = document.getElementById(`comments-${commentObject.image.id}`);
    commentUl.innerHTML += commentObject.commentEl();
  }
}