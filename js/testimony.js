(function(){
    
    // TESTIMONYS
    const testimonys = [...document.querySelectorAll(".testimony__body")];
    const leftArrow = document.getElementById("before");
    const rightArrow = document.getElementById("after");
    
    leftArrow.addEventListener("click", ()=>{
        changePosition(-1);
    });

    rightArrow.addEventListener("click", ()=>{
        changePosition(1);
    });

    const changePosition = (add)=>{
        const dataTestimony = document.querySelector(".testimony__body--show").dataset.id;
        var data = Number(dataTestimony);
        data += add;

        testimonys[Number(dataTestimony)-1].classList.remove("testimony__body--show");
        if(data === 4 || data === 0){
            if(data === 4){
                data = 1
            }
            else{
                data = 3;
            }
        }
        testimonys[data-1].classList.add("testimony__body--show");
    };
})();