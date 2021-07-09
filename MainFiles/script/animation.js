// file to animation app/web

//VAR's
var pokeinfo = document.getElementById("pokeinfo");
var armazemIDimg = [];
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
            pokeinfo.style.top = "100%";

            var idimg = document.getElementById( armazemIDimg[0] );
            idimg.style = "z-index:1;" ;
            armazemIDimg.shift();

        break;
        case 2: 
            infoDiv.style.top = "0vh"; 
            pokeinfo.style.top = "100%";

            var idimg = document.getElementById(  armazemIDimg[0] );
            idimg.style = "z-index:1;" ;
            armazemIDimg.shift();
         
        break;
    }
}
//------------------------------------------------

//DIV INFO POKEINFO IMG

function pokeinfoF( id ){ 
    pokeinfo.style.top = "0rem" ;
    pokeinfo.style.backgroundColor = colors[ id-1 ]; 
    var idimg = document.getElementById( "pokeImg"+id );
    idimg.style = "z-index:4;width:200px;height:200px;position:fixed;top:80px;left:50%;margin-left:-100px;" ;
    armazemIDimg.push( "pokeImg" + id );
    console.log[ armazemIDimg ];
}