const NumberEntryView = require('./views/number_entry_view.js');
const PokemonDetailView = require('./views/pokemon_detail_view.js');
const Pokemon = require('./models/pokemon.js');

document.addEventListener('DOMContentLoaded', () => {
const numberForm = document.querySelector('form#number-form');
const numberEntryView = new NumberEntryView(numberForm);
numberEntryView.bindEvents();

const factContainer = document.querySelector('#pokemon-detail');
const pokemonDetailView = new PokemonDetailView(factContainer);
pokemonDetailView.bindEvents();

const pokemon = new Pokemon();
pokemon.bindEvents();
});
