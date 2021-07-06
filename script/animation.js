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
    },100);
}, 8900 );
//------------------------------------------------

// LINHA AZUL MENU
var btnContainer = document.getElementById('menuapp');
var btn = btnContainer.getElementsByClassName('btn');

for(var i=0; i<btn.length; i++){
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active');
        this.className += ' active';
    })
}
//------------------------------------------------

//ANIMATION MENU
var infoDiv = document.getElementById("info");
var modeNoturn = 0;

function activeMenu( mode ){
    switch( mode ){
        case 1: 
            if( modeNoturn == 0 ){
                document.body.style.backgroundColor = "#222";
                infoDiv.style.backgroundColor = "#222";
                modeNoturn = 1 ;
            }else{
                document.body.style.backgroundColor = "#fff";
                infoDiv.style.backgroundColor = "#fff";
                modeNoturn = 0 ;
            }
        break;
        case 2:
            infoDiv.style.top = "100%" ;
        break;
        case 3: infoDiv.style.top = "30vh"; break;
    }
}
//------------------------------------------------