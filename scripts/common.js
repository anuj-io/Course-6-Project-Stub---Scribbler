/**
 * Following is the code to toggle modal
 * All elements with class name `modal-trigger` present will have a click handler
 * which shall take modal id from their `data-modal-ctr` attribute and add show class to it
 */

 Array.from(document.getElementsByClassName('modal-trigger')).forEach(item => {
  item.addEventListener('click', event => {
    // Hide exisiting shown modal
    const currentlyOpenModal = document.querySelector('.modal.show')

    if(currentlyOpenModal) {
      currentlyOpenModal.classList.remove("show");
    }

    // Show the modal corresponding to clicked element
    const modalId = event.currentTarget.getAttribute('data-modal-ctr');
    document.getElementById(modalId).classList.add("show");
  });
});

/**
 * Following code add listener for click on cross icon and hides any open modal
 */
Array.from(document.getElementsByClassName('fa-times')).forEach(item => {
  item.addEventListener('click', event => {
    // Hide exisiting shown modal
    const currentlyOpenModal = document.querySelector('.modal.show')

    if(currentlyOpenModal) {
      currentlyOpenModal.classList.remove("show");
    }
  });
});