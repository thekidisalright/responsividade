document.addEventListener("DOMContentLoaded", function(){
    const closeIcon = document.querySelector('.navbar-close-icon');
    const burgerIcon = document.querySelector('.navbar-burger-icon');
    const body = document.querySelector('#body');
    function removeClass() {
        body.classList.remove('mobile-menu');
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
    }; 
    function addClass() {
        body.classList.add('mobile-menu');
        closeIcon.style.display = 'block';
        burgerIcon.style.display = 'none';
    };
    closeIcon.addEventListener('click', removeClass);
    burgerIcon.addEventListener('click', addClass);

});