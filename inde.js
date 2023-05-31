function  changeBg(){
    var scrollValue=window.scrollY;
    var navbar= document.getElementById('navbar');
    var scrollValue=window.scrollY;
    if(scrollValue <150){
        navbar.classList.remove('bgcolor');}else{
            navbar.classList.add('bgcolor')
    }

}
window.addEventListener('scroll', changeBg);