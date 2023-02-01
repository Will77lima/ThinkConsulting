function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open');
       document.querySelector('.icon').src = "assets/img/menu.png"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.png"
    }
};

const popup = document.getElementById('popup');

function handlepopup(open) {
    popup.classList[open ? 'add' : 'remove']('opened');
}