document.addEventListener("DOMContentLoaded", function(){
    const closeIcon = document.querySelector('.navbar-close-icon');
    function removeClass() {
        const body = document.querySelector('#body');
        body.classList.remove('mobile-menu');
    }; 
    closeIcon.addEventListener('click', removeClass);
});