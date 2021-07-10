// Motor

//VAR´s Engine
var namePoke;
var nav = document.getElementById("nav");
var containers = document.getElementById("containers");

function engine( mode , idPoke , color , WH ){

    switch( mode ){

        case 0:

            var url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
            fetch( url ).then( response => response.json()).then( pokemon => { 

                var container = document.createElement("div");
                var clase2 = document.createAttribute("class");
                var containerStyle = document.createAttribute("style");
                var onTouch = document.createAttribute("onclick");
                var idcontainer = document.createAttribute("id");
                clase2.value = "container";
                onTouch.value = "pokeinfoF("+idPoke+")";
                idcontainer.value = "poke" + idPoke ;
                
                if( color == null||undefined||"" ){ color = "#555" ; }
                containerStyle.value = "background-color:" + color + ";" ;
                
                container.setAttributeNode( clase2 );
                container.setAttributeNode( onTouch );
                container.setAttributeNode( idcontainer );
                container.setAttributeNode( containerStyle );

                var h4  = document.createElement("h4");
                var number = document.createElement("p");
                var br = document.createElement("br");
                var p = document.createElement("p");
                var ptype = document.createElement("p"); 

                var img = document.createElement("img");
                var imgSrc = document.createAttribute("src");
                var styleImg = document.createAttribute("style");
                var idimgpoke = document.createAttribute("id");
                idimgpoke.value = "pokeImg"+idPoke ;
                imgSrc.value = "https://pokeres.bastionbot.org/images/pokemon/" + idPoke + ".png";
                //imgSrc.value = pokemon.sprites.front_default;
                
                if( WH == undefined||null||"" ){ WH = 6 }
                styleImg.value = "width:" + WH + "rem;height:" + WH + "rem;";
                
                img.setAttributeNode( styleImg );
                img.setAttributeNode( idimgpoke );
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
        
        break;
        case 1:

            var url = 'https://pokeapi.co/api/v2/pokemon/' + idPoke ; 
            fetch( url ).then( response => response.json()).then( pokemon => { 
                  
                console.log( pokemon );

                //nome do pokemon
                var namePoke = pokemon.name;
                console.log("nome: " + namePoke );

                //TIPO 1
                var typePoke1 = pokemon.types[0].type.name;
                console.log( "Tipo 1: " + typePoke1 );

                //TIPO 2
                if( pokemon.types[1] != undefined||null ){
                    var typePoke2 = pokemon.types[1].type.name;
                    console.log( "Tipo 2: " + typePoke2 );
                }

                //altura do pokemon
                var heightPoke = pokemon.height;
                console.log("altura: " + heightPoke + "0cm" );

                //Peso
                var weightPoke = pokemon.weight;
                console.log( "Peso: " + weightPoke + "Kg" );

                //HP
                var hpPoke = pokemon.stats[0].base_stat;
                console.log( "HP: " + hpPoke );

                //Ataque
                var atackPoke = pokemon.stats[1].base_stat;
                console.log( "AT: " + atackPoke );

                //Defesa
                var defesaPoke = pokemon.stats[2].base_stat;
                console.log( "DF: " + defesaPoke );

                //Especial-atack
                var espAtackPoke = pokemon.stats[3].base_stat;
                console.log( "Especial - AT: " + espAtackPoke );

                //Especial-defesa
                var espDefesaPoke = pokemon.stats[4].base_stat;
                console.log( "Especial - DF: " + espAtackPoke );

                //velocidade
                var veloPoke = pokemon.stats[5].base_stat;
                console.log( "Velocidade: " + veloPoke );

                //habilidades
                var habilidade1 = pokemon.abilities[0].ability.name;
                var habilidade2 = pokemon.abilities[1].ability.name;
                console.log( "habilidade 1: " + habilidade1 );
                console.log( "habilidade 2: " + habilidade2 );

                var JsonHabilidade1 = pokemon.abilities[0].ability.url;
                fetch( JsonHabilidade1 ).then( response => response.json() ).then( habilidade => {

                    var sobre = habilidade.effect_entries[1].short_effect;
                    console.log( "Efeito da habilidade 1: " + sobre );

                });

                var JsonHabilidade2 = pokemon.abilities[1].ability.url;
                fetch( JsonHabilidade2 ).then( response => response.json() ).then( habilidade => {

                    var sobre = habilidade.effect_entries[1].short_effect;
                    console.log( "Efeito da habilidade 2: " + sobre );

                });

                //SOBRE O POKEMON
                var sobreType = pokemon.types[0].type.url;
                fetch( sobreType ).then( response => response.json()).then( type => { 
                    console.log( type );

                    //dano duplo recebido de
                    var doubleDamage = type.damage_relations.double_damage_from[0].name;
                    console.log( "Duplo dano recebido de: " + doubleDamage );

                    //duplo dano a pokemon tipo
                    var doublePokeDamage1 = type.damage_relations.double_damage_to[0].name;
                    var doublePokeDamage2 = type.damage_relations.double_damage_to[1].name;
                    console.log( "Duplo dano a pokemon tipo: " + doublePokeDamage1 );
                    console.log( "Duplo dano a pokemon tipo: " + doublePokeDamage2 );

                    //metade de dano recebido para pokemon tipo
                    var halfDamage1 = type.damage_relations.half_damage_from[0].name;
                    var halfDamage2 = type.damage_relations.half_damage_from[1].name;
                    var halfDamage3 = type.damage_relations.half_damage_from[2].name;
                    console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage1 );
                    console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage2 );
                    console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage3 );

                    //metade de dano de atack para pokemon tipo
                    var halfToDamage1 = type.damage_relations.half_damage_to[0].name;
                    var halfToDamage2 = type.damage_relations.half_damage_to[1].name;
                    var halfToDamage3 = type.damage_relations.half_damage_to[2].name;
                    console.log( "Metade de atack dado para: " + halfToDamage1 );
                    console.log( "Metade de atack dado para: " + halfToDamage2 );
                    console.log( "Metade de atack dado para: " + halfToDamage3 );

                    //Imune a
                    if( type.damage_relations.no_damage_from[0] != null||undefined ){
                        var imune = type.damage_relations.no_damage_from[0].name;
                        console.log( "Imune há: " + imune );
                    }

                    //Fraco contra
                    var noDamage = type.damage_relations.no_damage_to[0].name;
                    console.log( "Fraco contra: " + noDamage );

                });
            
            });

        break;
    
    }

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