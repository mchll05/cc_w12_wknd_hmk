const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Pokemon = function () {
};

Pokemon.prototype.bindEvents = function () {
  PubSub.subscribe('NumberEntryView:submit', (evt) => {
    this.handleNumberSubmit(evt.detail);
  })
};

Pokemon.prototype.getData = function (number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${ number }`;
  request = new Request(url);
    request.get((data) => {
    PubSub.publish('PokemonDetail:data-ready', data);
  });
};

Pokemon.prototype.handleNumberSubmit = function (number) {
  this.getData(number);
};

module.exports = Pokemon;
