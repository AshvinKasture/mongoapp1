const {ipcRenderer} = require('electron');


document.querySelector('#add').addEventListener('click', () => {
  console.log('add new button clicked');
  ipcRenderer.send('open','add');
});

document.querySelector('#search').addEventListener('click', () => {
  console.log('search button clicked');
});
