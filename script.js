const openButton = document.querySelector('.button');
const buttonTwo = document.querySelector('.button-two');
const share = document.querySelector('.share');
const mobile = document.querySelector('.mobile');
const align = document.querySelector('.align-mobile');

openButton.addEventListener('click', open);
buttonTwo.addEventListener('click', toggle);

function open() {
    share.classList.toggle('hidden');
     
}
function toggle() {
    share.classList.toggle('hidden');
    mobile.classList.toggle('hidden');
    align.classList.toggle('hidden');
    buttonTwo.style.color = "red"

}
