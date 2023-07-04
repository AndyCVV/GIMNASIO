(function(){
    const menu = document.querySelector(".nav__link");
    const startButton = document.querySelector(".nav__menu");
    const endButton = document.querySelector(".nav__close");
    startButton.addEventListener("click", ()=>{
        menu.classList.toggle("nav__link--show");
        endButton.classList.add("nav__close--add");
    });
    endButton.addEventListener("click", ()=>{
        menu.classList.remove("nav__link--show");
    });
})();