import { GIPHYAPIKey } from '../../../keyvault/keyvault.js';

document.querySelector('.get-new-gif').addEventListener('click', setNewGif);
const img = document.querySelector('img');
const loadMsg = document.querySelector('.load-msg');

async function setNewGif() {
  try {
    loadMsg.textContent = 'GETTING IMAGE';
    const searchParameter = document.querySelector('.search-param').value.replaceAll(' ', '%20');
    const response = await fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${GIPHYAPIKey}&s=${searchParameter ? searchParameter : 'adama%20battlestar'}}`, { mode: "cors" });
    const imgData = await response.json();
    img.src = imgData.data.images.original.url;
    loadMsg.textContent = '';
  } catch (err) {
    console.log(err);
  }
}