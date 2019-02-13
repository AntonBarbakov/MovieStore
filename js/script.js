let imgArr = document.querySelectorAll('.carousel-inner .carousel-item img');


function showLeague(){
    for(let i=0;i<imgArr.length;i++){
        imgArr[i].setAttribute("src", "img/league/"+i+".jpg")
    }
}

function showAvengers(){
    for(let i=0;i<imgArr.length;i++){
        imgArr[i].setAttribute("src", "img/avengers/"+i+".jpg")
    }
}