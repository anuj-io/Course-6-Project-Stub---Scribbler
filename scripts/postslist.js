const confirmationModal = document.getElementById('confirmationModal');
let selectedPost = null;

/**
 * Following is the code to toggle confirmation modal
 * All elements with class name `delete-post` present will have a click handler
 * which will open confirmation modal and set selected post in global scope
 */
 Array.from(document.getElementsByClassName('delete-post')).forEach(item => {
  item.addEventListener('click', event => {
    // Show Modal
    confirmationModal.classList.add('show');
    // Set post in global context
    selectedPost = event.currentTarget.closest('.post');
  });
});

document.getElementById('confirmBtn').addEventListener('click', event => {
  selectedPost.remove();
  // Hide Modal
  confirmationModal.classList.remove('show');
  // Reset
  selectedPost = null;
});

document.getElementById('dismissBtn').addEventListener('click', event => {
  // Hide Modal
  confirmationModal.classList.remove('show');
  // Reset
  selectedPost = null;
});

Array.from(document.getElementsByClassName('open-post')).forEach(item => {
  item.addEventListener('click', event => {
    window.location = "./post.html"
  });
});
