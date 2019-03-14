var greeting = require('./greeting');
var result = greeting("John");
document.querySelector('#root').innerHTML = result;
if (module.hot) {
  module.hot.accept();
}