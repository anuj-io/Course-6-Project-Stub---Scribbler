const socialUpdatedEl = document.getElementById('socialUpdated');
const countOfLikesEl = document.getElementById('countOfLikes');
const commentTextEl = document.getElementById('commentText');
const commentSectionEl = document.getElementById('commentSection');

document.getElementById('editPost').addEventListener('click', event => {
  event.currentTarget.closest('.btn-ctr').classList.toggle('edit-mode');
  Array.from(document.querySelectorAll("[contenteditable=false]")).forEach(element => {
    element.setAttribute("contenteditable", "true");
  })
});

document.getElementById('savePost').addEventListener('click', event => {
  event.currentTarget.closest('.btn-ctr').classList.toggle('edit-mode');
  Array.from(document.querySelectorAll("[contenteditable=true]")).forEach(element => {
    element.setAttribute("contenteditable", "false");
  })
});

document.getElementById('socialInit').addEventListener('click', event => {
  event.currentTarget.classList.toggle('show');
  socialUpdatedEl.classList.add('show');
});

socialUpdatedEl.addEventListener('click', event => {
  const likes = parseInt(countOfLikesEl.textContent, 10);
  countOfLikesEl.textContent = likes+1;
});

document.getElementById('commentPost').addEventListener('click', event => {
  const commentText = commentTextEl.value;

  const commentNode =  document.createElement("div");
  const commentTextNode = document.createTextNode(commentText);

  commentNode.appendChild(commentTextNode);
  commentNode.classList.add('comment');

  commentSectionEl.appendChild(commentNode);

  commentTextEl.value= '';
});