// Get all modals
let modals = document.getElementsByClassName("modal");

// Get all the button that opens the modal
let btns = document.getElementsByClassName("showModal");

// Get all the <span> element that closes the modal
let closeBtns = document.getElementsByClassName("close");



Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const id = ev.target.dataset.modalId;
    const el = document.getElementById(id);
    el.style.display = "block";
  });
});

Array.from(closeBtns).forEach((span) => {
  span.addEventListener(`click`, (ev) => {
    ev.preventDefault();
    const modal = ev.target.closest(".modal");
    modal.style.display = "none";
  });
});

// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", (ev) => {
  ev.preventDefault();

  const el = ev.target;

  if (el.classList.contains("showModal")) {
    el.style.display = "none";
  } else {
    if (el.href) {
      console.log(el.href);
      window.location.href = el.href;
    }
  }
});
