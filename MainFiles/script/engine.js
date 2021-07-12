// Motor

//VAR´s Engine
var namePoke;
var nav = document.getElementById("nav");
var containers = document.getElementById("containers");

var namePokeInfo = document.getElementById("namePokeInfo");
var typePokeinfo1 = document.getElementById("typePokeinfo1");
var typePokeinfo2 = document.getElementById("typePokeinfo2");
var numberPoke = document.getElementById("numberPoke");
var alturaPoke = document.getElementById("alturaPoke");
var pesoPoke = document.getElementById("pesoPoke");
var barHP = document.getElementById("barHP");
var barAtk = document.getElementById("barAtk");
var barEspAtk = document.getElementById("barEspAtk");
var barDef = document.getElementById("barDef");
var barEspDef = document.getElementById("barEspDef");
var barSpeed = document.getElementById("barSpeed");
var tipoPoke = document.getElementById("tipoPoke");
var hab1 = document.getElementById("hab1");
var hab2 = document.getElementById("hab2");

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
                namePokeInfo.innerHTML = namePoke;

                var descricao = pokemon.species.url;
                fetch( descricao ).then( response => response.json()).then( descrption => {
                    console.log( descrption );

                    var descp1 = descrption.flavor_text_entries[0].flavor_text;
                    console.log( "sobre: " + descp1 );
                    var descp2 = descrption.flavor_text_entries[2].flavor_text;
                    console.log( "sobre: " + descp2 );
                    var descp3 = descrption.flavor_text_entries[3].flavor_text;
                    console.log( "sobre: " + descp3 );
                    var descp4 = descrption.flavor_text_entries[4].flavor_text;
                    console.log( "sobre: " + descp4 );
                    var descp5 = descrption.flavor_text_entries[5].flavor_text;
                    console.log( "sobre: " + descp5 );
                    var descp6 = descrption.flavor_text_entries[6].flavor_text;
                    console.log( "sobre: " + descp6 );
                    var descp7 = descrption.flavor_text_entries[8].flavor_text;
                    console.log( "sobre: " + descp7 );
                    var descp8 = descrption.flavor_text_entries[9].flavor_text;
                    console.log( "sobre: " + descp8 );
                    var descp9 = descrption.flavor_text_entries[10].flavor_text;
                    console.log( "sobre: " + descp9 );

                    //GRUPO - faz parte do grupo de
                    var grup1 = descrption.egg_groups[0].name;
                    console.log( "faz parte do grupo de: " + grup1 );

                    if( descrption.egg_groups[1] != undefined||null ){
                        var grup2 = descrption.egg_groups[1].name;
                        console.log( "faz parte do grupo de: " + grup2 );
                    }

                } );

                //TIPO 1
                var typePoke1 = pokemon.types[0].type.name;
                console.log( "Tipo 1: " + typePoke1 );
                typePokeinfo1.innerHTML = typePoke1;
                tipoPoke.innerHTML = typePoke1;

                //TIPO 2
                if( pokemon.types[1] != undefined||null ){
                    typePokeinfo2.style.display = "inline" ;
                    var typePoke2 = pokemon.types[1].type.name;
                    console.log( "Tipo 2: " + typePoke2 );
                    typePokeinfo2.innerHTML = typePoke2;
                }else{
                    typePokeinfo2.style.display = "none" ;
                }

                //Number Poke
                if( idPoke < 10 ){
                    numberPoke.innerHTML = "#00" + idPoke ;
                }if( ( idPoke >= 10 )&&( idPoke < 100 ) ){
                    numberPoke.innerHTML = "#0" + idPoke ;
                }if( idPoke >= 100 ){
                    numberPoke.innerHTML = "#" + idPoke ;
                }

                //altura do pokemon
                var heightPoke = pokemon.height;
                console.log("altura: 0," + heightPoke + "m" );
                var stringHeight = heightPoke + "" ;
                if( stringHeight[1] == undefined||null ){
                    var stringHeightPronta = "0," + stringHeight[0] + "m" ;
                    alturaPoke.innerHTML = stringHeightPronta;
                }else{
                    var stringHeightPronta = stringHeight[0] + "," + stringHeight[1] + "m";
                    alturaPoke.innerHTML = stringHeightPronta;
                }

                //Peso
                var weightPoke = pokemon.weight;
                console.log( "Peso: " + weightPoke + "Kg" );
                var string = weightPoke + "" ;
                if( string[2] != undefined||null ){
                    var stringPronta = string[0] + string[1] + "," + string[2] + "Kg";
                    pesoPoke.innerHTML = stringPronta ;
                }
                if( string[2] == undefined||null ){
                    var stringPronta = string[0] + "," + string[1] + "Kg";
                    pesoPoke.innerHTML = stringPronta ;
                }
                if( ( string[1] == undefined||null )&&( string[2] == undefined||null ) ){
                    var stringPronta = "0," + string[0] + "Kg";
                    pesoPoke.innerHTML = stringPronta ;
                }
                if( string[3] != undefined||null ){
                    var stringPronta = string[0] + string[1] + string[2] + "," + string[3] + "Kg";
                    pesoPoke.innerHTML = stringPronta ;
                }


                //HP
                var hpPoke = pokemon.stats[0].base_stat;
                console.log( "HP: " + hpPoke );
                barHP.style.setProperty("--Hp", hpPoke/1.5 );
                barHP.innerHTML = hpPoke;

                //Ataque
                var atackPoke = pokemon.stats[1].base_stat;
                console.log( "AT: " + atackPoke );
                barAtk.style.setProperty("--Atk", atackPoke/1.5 );
                barAtk.innerHTML = atackPoke;

                //Defesa
                var defesaPoke = pokemon.stats[2].base_stat;
                console.log( "DF: " + defesaPoke );
                barDef.style.setProperty("--Def", defesaPoke/1.5 );
                barDef.innerHTML = defesaPoke;

                //Especial-atack
                var espAtackPoke = pokemon.stats[3].base_stat;
                console.log( "Especial - AT: " + espAtackPoke );
                barEspAtk.style.setProperty("--OverAtk", espAtackPoke/1.5 );
                barEspAtk.innerHTML = espAtackPoke;

                //Especial-defesa
                var espDefesaPoke = pokemon.stats[4].base_stat;
                console.log( "Especial - DF: " + espDefesaPoke );
                barEspDef.style.setProperty("--Overdef" , espDefesaPoke/1.5 );
                barEspDef.innerHTML = espDefesaPoke;

                //velocidade
                var veloPoke = pokemon.stats[5].base_stat;
                console.log( "Velocidade: " + veloPoke );
                barSpeed.style.setProperty("--Speed" , veloPoke/1.5 );
                barSpeed.innerHTML = veloPoke ;

                //habilidades
                var habilidade1 = pokemon.abilities[0].ability.name;
                hab1.innerHTML = habilidade1;
                
                if( pokemon.abilities[1] != undefined||null ){
                    var habilidade2 = pokemon.abilities[1].ability.name;
                    hab2.innerHTML = habilidade2 ;
                    console.log( "habilidade 1: " + habilidade1 );
                    console.log( "habilidade 2: " + habilidade2 );
                }else{
                    hab2.innerHTML = "none" ;
                }

                var JsonHabilidade1 = pokemon.abilities[0].ability.url;
                fetch( JsonHabilidade1 ).then( response => response.json() ).then( habilidade => {

                    var sobre = habilidade.effect_entries[1].short_effect;
                    console.log( "Efeito da habilidade 1: " + sobre );

                });

                if(  pokemon.abilities[1] != undefined||null ){

                    var JsonHabilidade2 = pokemon.abilities[1].ability.url;
                    fetch( JsonHabilidade2 ).then( response => response.json() ).then( habilidade => {

                        var sobre = habilidade.effect_entries[1].short_effect;
                        console.log( "Efeito da habilidade 2: " + sobre );

                    });

                }

                //SOBRE O POKEMON
                var sobreType = pokemon.types[0].type.url;
                fetch( sobreType ).then( response => response.json()).then( type => { 
                    console.log( type );

                    //dano duplo recebido de
                    var doubleDamage = type.damage_relations.double_damage_from[0].name;
                    console.log( "Duplo dano recebido de: " + doubleDamage );

                    //duplo dano a pokemon tipo
                    if( type.damage_relations.double_damage_to[0] != undefined||null ){
                        var doublePokeDamage1 = type.damage_relations.double_damage_to[0].name;
                        console.log( "Duplo dano a pokemon tipo: " + doublePokeDamage1 );
                    }

                    if( type.damage_relations.double_damage_to[1] != undefined||null ){
                        var doublePokeDamage2 = type.damage_relations.double_damage_to[1].name;
                        console.log( "Duplo dano a pokemon tipo: " + doublePokeDamage2 );
                    }

                    //metade de dano recebido para pokemon tipo
                    if(  type.damage_relations.half_damage_from[0] != undefined||null ){
                        var halfDamage1 = type.damage_relations.half_damage_from[0].name;
                        console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage1 );
                    }

                    if( type.damage_relations.half_damage_from[1] != undefined||null ){
                        var halfDamage2 = type.damage_relations.half_damage_from[1].name;
                        console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage2 );
                    }
                    
                    if( type.damage_relations.half_damage_from[2] != undefined||null ){
                        var halfDamage3 = type.damage_relations.half_damage_from[2].name;
                        console.log( "Metade de dano recebido para pokemon tipo: " + halfDamage3 );
                    }

                    //metade de dano de atack para pokemon tipo
                    var halfToDamage1 = type.damage_relations.half_damage_to[0].name;
                    console.log( "Metade de atack dado para: " + halfToDamage1 );

                    if( type.damage_relations.half_damage_to[1] != undefined||null ){
                        var halfToDamage2 = type.damage_relations.half_damage_to[1].name;
                        console.log( "Metade de atack dado para: " + halfToDamage2 );
                    }

                    if( type.damage_relations.half_damage_to[2] != undefined||null ){
                        var halfToDamage3 = type.damage_relations.half_damage_to[2].name;
                        console.log( "Metade de atack dado para: " + halfToDamage3 );
                    }

                    //Imune a
                    if( type.damage_relations.no_damage_from[0] != null||undefined ){
                        var imune = type.damage_relations.no_damage_from[0].name;
                        console.log( "Imune há: " + imune );
                    }

                    //Fraco contra
                    if( type.damage_relations.no_damage_to[0] != undefined||null ){

                        var noDamage = type.damage_relations.no_damage_to[0].name;
                        console.log( "Fraco contra: " + noDamage );

                    }

                });
            
            });

        break;
    
    }

}