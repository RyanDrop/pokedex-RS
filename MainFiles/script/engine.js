// Motor

//VAR´s Engine
var namePoke;
var nav = document.getElementById("nav");

function engine( idPoke ){

    var url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
    fetch( url ).then( response => response.json()).then( pokemon => { 

        var containers = document.createElement("div");
        var clase = document.createAttribute("class");
        clase.value = "containers";
        containers.setAttributeNode( clase );

        var container = document.createElement("div");
        var clase2 = document.createAttribute("class");
        clase2.value = "container";
        container.setAttributeNode( clase2 );

        var h4  = document.createElement("h4");
        var br = document.createElement("br");
        var p = document.createElement("p");
        var ptype = document.createElement("p"); 

        var img = document.createElement("img");
        var imgSrc = document.createAttribute("src");
        imgSrc.value = "https://pokeres.bastionbot.org/images/pokemon/" + idPoke + ".png";
        img.setAttributeNode( imgSrc );

        h4.innerHTML = pokemon.name;
        //p.innerHTML = pokemon.type;

        container.appendChild( h4 );
        container.appendChild( p );
        container.appendChild( br );
        container.appendChild( ptype );
        container.appendChild( img );

        containers.appendChild( container );

        nav.appendChild( containers );

    });

}

//foto.src = "https://pokeres.bastionbot.org/images/pokemon/" + idPoke + ".png";