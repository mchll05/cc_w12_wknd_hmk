const PubSub = require('../helpers/pub_sub.js');

const PokemonDetailView = function(element){
  this.element = element;
}

PokemonDetailView.prototype.setupListener = function () {
  PubSub.subscribe('Number:pokemon-info',(evt)=>{ //('channel', callback)
    this.render(evt.detail);
    console.log(evt.detail);
  })
};

PokemonDetailView.prototype.render = function (numberDetail) { //for the html display aspects
  this.element.innerHTML ='';
  const number = document.createElement('h3');
  number.textContent = `Number: ${numberDetail.number}`;

  const text = document.createElement('h3');
  text.textContent = `Pokemon: ${numberDetail.text}`

  this.element.appendChild(number);
  this.element.appendChild(text);
};

PokemonDetailView.prototype.bindEvents = function () {
  this.setupListener();
};

module.exports = PokemonDetailView;
