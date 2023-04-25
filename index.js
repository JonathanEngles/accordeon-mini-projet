/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
    item.addEventListener('click', () => {
        const next = item.nextElementSibling;
        const icone = item.lastElementChild;
        next.classList.toggle('visible');
        icone.classList.toggle('rotate');
    });
});
