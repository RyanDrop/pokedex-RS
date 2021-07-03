// file to animation app/web

//VAR's

var div_load = document.getElementById("div-load");
var img_load1 = document.getElementById("img-load1");
var img_load2 = document.getElementById("img-load2");

function trocarGifLoad(){
    img_load1.style.display = "none";
}

window.setTimeout( "trocarGifLoad()" , 6900 );

function trocarGifLoad2(){
    div_load.style.display = "none";
}

window.setTimeout( "trocarGifLoad2()" , 9000 );