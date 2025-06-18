// Get all modals
let modals = document.getElementsByClassName("modal");

// Get all the button that opens the modal
let btns = document.getElementsByClassName("showModal");

// Get all the <span> element that closes the modal
let closeBtns = document.getElementsByClassName("close");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", (ev) => {
//     let id = ev.target.dataset.modalId;
//     console.log(id);
//     let el = document.getElementById(id);
//     console.log(el);

//     el.style.display = "block";
//   });
// }

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    let id = ev.target.dataset.modalId;
    console.log(id);
    let el = document.getElementById(id);
    console.log(el);

    el.style.display = "block";
  });
});

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  // if (event.target == modal) {
  // modal.style.display = "none";
  // }
};
