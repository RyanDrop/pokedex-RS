// file to animation app/web

//VAR's
var div_load = document.getElementById("div-load");
var img_load = document.getElementById("img-load");
//------------------------------------------------

// ANIMATE LOAD
window.setTimeout( function(){
    img_load.src = "img/loading-gifs/pikachu.gif";
}, 6900 );

window.setTimeout( function(){
    div_load.style.transform = "scale(100)";
    window.setTimeout(function(){
        div_load.style.display = "none";
    },100);
}, 8900 );
//------------------------------------------------