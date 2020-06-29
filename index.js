document.addEventListener("DOMContentLoaded", function(e) {
    submitPokemon()
})


function fetchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        renderPokemon(json)
    })
}

function submitPokemon() {
    const pokeForm = document.querySelector("#search-poke-form")
    pokeForm.addEventListener("submit", function(e) {
        e.preventDefault()
        fetchPokemon(pokeForm.name.value.toLowerCase())
    })
}

function renderPokemon(pokemon) {
    console.log(pokemon)

    const pokemonContainer = document.querySelector("#pokemon-container")
    pokemonContainer.innerHTML = ""
    pokemonContainer.innerHTML += `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}">
    <p>Type: ${extractTypes(pokemon)}</p>
    `
}

function extractTypes(pokemon) {
    let typeArray = []
    pokemon.types.forEach(function(typeObj) {
        typeArray.push(typeObj.type.name)
    })
   return typeArray.join(" / ")
}

