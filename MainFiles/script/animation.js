// file to animation app/web

//VAR's
//------------------------------------------------

// ANIMATE LOAD

var div_load = document.getElementById("div-load");
var img_load = document.getElementById("img-load");

window.setTimeout( function(){
    img_load.src = "img/loading-gifs/pikachu.gif";
}, 6900 );

window.setTimeout( function(){
    div_load.style.transform = "scale(100)";
    window.setTimeout(function(){
        div_load.style.display = "none";
        document.body.style.overflowY = "visible";
    },100);
}, 8900 );
//------------------------------------------------

//ANIMATION MENU
var infoDiv = document.getElementById("info");
var modeNoturn = 0;

function activeMenu( mode ){
    switch( mode ){
        case 1:
            infoDiv.style.top = "100%" ;
        break;
        case 2: infoDiv.style.top = "0vh"; break;
    }
}
//------------------------------------------------