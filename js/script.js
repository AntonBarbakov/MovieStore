let imgArr = document.querySelectorAll('.carousel-inner .carousel-item img');


function showLeague(){
    for(let i=0;i<imgArr.length;i++){
        imgArr[i].setAttribute("src", "img/league/"+i+".jpg")
    }
    $('#thirdMovieInformation').hide();
    $('#secondMovieInformation').show();
    $('#firstMovieInformation').hide();
}

function showAvengers(){
    for(let i=0;i<imgArr.length;i++){
        imgArr[i].setAttribute("src", "img/avengers/"+i+".jpg")
    }
    $('#thirdMovieInformation').hide();
    $('#secondMovieInformation').hide();
    $('#firstMovieInformation').show();
}
function showGuardians(){
    for(let i=0;i<imgArr.length;i++){
        imgArr[i].setAttribute("src", "img/guardians/"+i+".jpg")
    }
    $('#thirdMovieInformation').show();
    $('#secondMovieInformation').hide();
    $('#firstMovieInformation').hide();
}