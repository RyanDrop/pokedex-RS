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
var descricaoo = document.getElementById("descricao");

function engine( mode , idPoke , color ){

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
                var idimgpoke = document.createAttribute("id");
                idimgpoke.value = "pokeImg"+idPoke ;
                imgSrc.value = "https://pokeres.bastionbot.org/images/pokemon/" + idPoke + ".png";
                
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
                  
                //nome do pokemon
                var namePoke = pokemon.name;
                namePokeInfo.innerHTML = namePoke;

                var descricao = pokemon.species.url;
                fetch( descricao ).then( response => response.json()).then( descrption => {

                    var descp1 = descrption.flavor_text_entries[10].flavor_text;
                    descricaoo.innerHTML = descp1 ;

                } );

                //TIPO 1
                var typePoke1 = pokemon.types[0].type.name;
                typePokeinfo1.innerHTML = typePoke1;
                tipoPoke.innerHTML = typePoke1;

                //TIPO 2
                if( pokemon.types[1] != undefined||null ){
                    typePokeinfo2.style.display = "inline" ;
                    var typePoke2 = pokemon.types[1].type.name;
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
                barHP.style.setProperty("--Hp", hpPoke/1.5 );
                barHP.innerHTML = hpPoke;

                //Ataque
                var atackPoke = pokemon.stats[1].base_stat;
                barAtk.style.setProperty("--Atk", atackPoke/1.5 );
                barAtk.innerHTML = atackPoke;

                //Defesa
                var defesaPoke = pokemon.stats[2].base_stat;
                barDef.style.setProperty("--Def", defesaPoke/1.5 );
                barDef.innerHTML = defesaPoke;

                //Especial-atack
                var espAtackPoke = pokemon.stats[3].base_stat;
                barEspAtk.style.setProperty("--OverAtk", espAtackPoke/1.5 );
                barEspAtk.innerHTML = espAtackPoke;

                //Especial-defesa
                var espDefesaPoke = pokemon.stats[4].base_stat;
                barEspDef.style.setProperty("--Overdef" , espDefesaPoke/1.5 );
                barEspDef.innerHTML = espDefesaPoke;

                //velocidade
                var veloPoke = pokemon.stats[5].base_stat;
                barSpeed.style.setProperty("--Speed" , veloPoke/1.5 );
                barSpeed.innerHTML = veloPoke ;

                //habilidades
                var habilidade1 = pokemon.abilities[0].ability.name;
                hab1.innerHTML = habilidade1;
                
                if( pokemon.abilities[1] != undefined||null ){
                    var habilidade2 = pokemon.abilities[1].ability.name;
                    hab2.innerHTML = habilidade2 ;
                }else{
                    hab2.innerHTML = "none" ;
                }
            
            });

        break;
    
    }

}