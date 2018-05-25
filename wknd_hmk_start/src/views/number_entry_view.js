const PubSub = require('../helpers/pub_sub.js')

const NumberEntryView = function (form) {
  this.form = form;
};

NumberEntryView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

NumberEntryView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('NumberEntryView:submit', evt.target.number.value);
};

module.exports = NumberEntryView;
