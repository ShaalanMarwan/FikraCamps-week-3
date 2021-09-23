window.addEventListener('load', function() {
    const preloader=document.querySelector('#preloader');

    setTimeout(function(){
    document.body.removeChild(preloader);

    },2000);
})