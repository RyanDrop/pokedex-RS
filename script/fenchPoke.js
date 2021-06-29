// código de busca de dados em formato JSON

const fechPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25'; //pikachu 25
    fetch( url ).then( response => response.json()).then( pokemon => { console.log(pokemon) } );
}

fechPokemon();