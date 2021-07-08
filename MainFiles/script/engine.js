// Motor

//VAR´s Engine
var namePoke;
var nav = document.getElementById("nav");
var containers = document.getElementById("containers");

function engine( idPoke , color ){

    var url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
    fetch( url ).then( response => response.json()).then( pokemon => { 

        console.log( pokemon );

        var container = document.createElement("div");
        var clase2 = document.createAttribute("class");
        var containerStyle = document.createAttribute("style");
        clase2.value = "container";
        containerStyle.value = "background-color:" + color + ";" ;
        container.setAttributeNode( clase2 );
        container.setAttributeNode( containerStyle );

        var h4  = document.createElement("h4");
        var number = document.createElement("p");
        var br = document.createElement("br");
        var p = document.createElement("p");
        var ptype = document.createElement("p"); 

        var img = document.createElement("img");
        var imgSrc = document.createAttribute("src");
        //imgSrc.value = "https://pokeres.bastionbot.org/images/pokemon/" + idPoke + ".png";
        imgSrc.value = pokemon.sprites.front_default;
        img.setAttributeNode( imgSrc );

        var classpp1 = document.createAttribute("class");
        var classpp2 = document.createAttribute("class");
        var classpp3 = document.createAttribute("class");
        classpp1.value = "pp";
        classpp2.value = "pp";
        classpp3.value = "number";
        p.setAttributeNode( classpp1 );
        ptype.setAttributeNode( classpp2 );
        number.setAttributeNode( classpp3 );

        h4.innerHTML = pokemon.name;
        p.innerHTML = pokemon.types[0].type.name;

        if( idPoke < 10 ){
            number.innerHTML = "#00" + idPoke ;
        }if( ( idPoke >= 10 )&&( idPoke < 100 ) ){
            number.innerHTML = "#0" + idPoke ;
        }if( idPoke >= 100 ){
            number.innerHTML = "#" + idPoke ;
        }
        
        if( pokemon.types[1] != undefined||null ){
            ptype.innerHTML = pokemon.types[1].type.name;
        }else{
            ptype.style.display = "none" ;
            img.style.marginTop = "15px";
        }

        container.appendChild( h4 );
        container.appendChild( number );
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