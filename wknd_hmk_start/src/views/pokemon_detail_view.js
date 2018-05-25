const PubSub = require('../helpers/pub_sub.js');

const PokemonDetailView = function(element){
  this.element = element;
}

PokemonDetailView.prototype.setupListener = function () {
  // console.log("Setup listener works!")
  PubSub.subscribe('PokemonDetail:data-ready',(evt)=>{
    this.render(evt.detail);
    console.log(evt.detail);
  });
};

PokemonDetailView.prototype.render = function (numberDetail) {
  this.element.innerHTML ='';

  const image = document.createElement('img');
  image.src = `${numberDetail.sprites.front_default}`;

  const pName = document.createElement('h3');
  pName.textContent = `#${numberDetail.id} ${numberDetail.name}`;

  const type = document.createElement('h4');
  type.textContent = `type: ${numberDetail.types[0].type.name}`;

  const pHeight = document.createElement('h4');
  pHeight.textContent = `height: ${numberDetail.height}'`;

  this.element.appendChild(image);
  this.element.appendChild(pName);
  this.element.appendChild(type);
  this.element.appendChild(pHeight);
};

PokemonDetailView.prototype.bindEvents = function () {
  // console.log("Bind event runs!")
  this.setupListener();
};

module.exports = PokemonDetailView;
