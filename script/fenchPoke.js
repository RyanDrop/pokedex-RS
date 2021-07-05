// código de busca de dados em formato JSON

//VAR select id
var idPoke = 25; //pikachu 25
var pokeName ;

const fechPokemon = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
    fetch( url ).then( response => response.json()).then( pokemon => { 
        
        console.log(pokemon); 
        
        //pegando dados da PokeAPI

            //nome do pokemon
        var namePoke = pokemon.name;
        console.log( "nome: " + namePoke );
        pokeName = namePoke ;

            //abilidade 1 do pokemon
        var ability1 = pokemon.abilities[0].ability.name;
        console.log( "Abilidade 1: " + ability1 );

            //abilidade 2 do pokemon
         var ability2 = pokemon.abilities[1].ability.name;
         console.log( "Abilidade 1: " + ability2 );

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
        

    } );

}

fechPokemon();