// CATEGORY SELECTION

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        categoryCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});


// FAVORITE BUTTONS

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

    });

});


// ADD BUTTON FEEDBACK

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText = button.textContent;

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);

    });

});


// MOBILE MENU

const menuButton = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});