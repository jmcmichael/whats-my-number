require('./styles/index.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';
import 'bootstrap';

jquery(() => {
  console.log('Hello jQuery + bootstrap 4!');
});

// require('normalize.css/normalize.css');
// require('./styles/index.scss');

// document.addEventListener("DOMContentLoaded", () => {

//     const pluginsTriggerElement = document.getElementById('plugins-trigger');
//     const pluginsElement = document.getElementById('plugins');

//     const pluginsVisibleClass = "splash-overview-plugins__list--visible";

//     pluginsTriggerElement.onclick = () => {
//         pluginsElement.classList.toggle(pluginsVisibleClass);
//     }
// });
