// Motor

//VAR´s Engine
var namePoke;
var nav = document.getElementById("nav");

function engine( idPoke ){

    var url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
    fetch( url ).then( response => response.json()).then( pokemon => { 

        console.log( pokemon );

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
        p.innerHTML = pokemon.types[0].type.name;
        
        if( pokemon.types[1] != undefined||null ){
            ptype.innerHTML = pokemon.types[1].type.name;
        }

        container.appendChild( h4 );
        container.appendChild( p );
        container.appendChild( br );
        container.appendChild( ptype );
        container.appendChild( img );

        containers.appendChild( container );

        nav.appendChild( containers );

    });

}


//abilidade 1 do pokemon
       // var ability1 = pokemon.abilities[0].ability.name;
        //console.log( "Abilidade 1: " + ability1 );

            //abilidade 2 do pokemon
         //var ability2 = pokemon.abilities[1].ability.name;
         //console.log( "Abilidade 1: " + ability2 );

         /*caminhos JSON 

            nome do pokemon
                pokemon.name

            tipo do pekemon
                pokemon.type[0].type.name
                        pode ter mais que um tipo

            imagem do popkemon frente
                pokemon.sprites.front_default
                    retorna URL para tag img HTML

            imagem do pokemon trás
                pokemon.sprites.back_default
                    retorna URL para tag img HTML
         
			imagem alta resolução
				url + id do pokemon + .png
					https://pokeres.bastionbot.org/images/pokemon/
			
		*/