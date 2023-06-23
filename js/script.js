document.addEventListener('DOMContentLoaded', function(){
    const closeIcon = document.querySelector('.navbar-close');
        const burgerIcon = document.querySelector('.navbar-burger-icon');
        body = document.body;
        function removeClass() {
            body.removeAttribute('class', 'mobile-menu');
            closeIcon.style.display = 'none';
        }; 
        function addClass() {
            body.classList.add('mobile-menu');
            closeIcon.style.display = 'flex';
        };
        document.body.onresize = function() {
            if(body.clientWidth>1024){
                removeClass();
            }
            else{
                closeIcon.style.display = 'flex';
            }
        };
        closeIcon.addEventListener('click', removeClass);
        burgerIcon.addEventListener('click', addClass);

});
    

    

