// file to animation app/web

//VAR's
var pokeinfo = document.getElementById("pokeinfo");
var sobre = document.getElementById("sobree");
var stats = document.getElementById("stats");
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
            idimg = document.getElementById( armazemIDimg[1] );
            idimg.style = "z-index:1;" ;
            armazemIDimg.shift();

        break;
        case 2: 
            infoDiv.style.top = "0vh"; 
            pokeinfo.style.top = "100%";

            var idimg = document.getElementById( armazemIDimg[0] );
            idimg.style = "z-index:1;" ;
            armazemIDimg.shift();
            idimg = document.getElementById( armazemIDimg[1] );
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
    sobre.style.color = colors[ id-1 ] ;
    stats.style.color = colors[ id-1 ] ;
    var idimg = document.getElementById( "pokeImg"+id );
    idimg.style = "z-index:4;width:auto;height:33vh;position:fixed;top:40%;left:47%;transform: translate(-40%,-47%);" ;
    armazemIDimg.push( "pokeImg" + id );

    //CHAMADA DE MOTOR PARA BUSCA DE DADOS
        engine( 1 , id );
    //------------------------------------
}

//PARTICLES JS

particlesJS("particles-js",{
    "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": false,
            "value_area": 500
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 300,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
});