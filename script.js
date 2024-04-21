const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

// Modal Open function

const openModal = () => {
    modal.classList.add("active"); // added active class to modal element

    overlay.classList.add("overlayactive");

};

// Modal Open function

const closeModal = () => {
    modal.classList.remove("active"); // added active class to modal element

    overlay.classList.remove("overlayactive");
};