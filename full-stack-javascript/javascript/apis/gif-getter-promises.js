import { GIPHYAPIKey } from '../../../keyvault/keyvault.js';

function getNewGif(searchTerm) {
  fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${GIPHYAPIKey}&s=${searchTerm}}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseParsed) {
      // console.log(responseParsed);
      let oldImg = document.body.querySelector('.the-gif');
      if (oldImg) {
        document.querySelector('.container').removeChild(oldImg);
      }
      let img = document.createElement('img');
      img.classList.add('the-gif');
      img.src = responseParsed.data.images.original.url;
      document.body.querySelector('.container').appendChild(img);
    })
    .catch(function (err) {
      console.log(err);
    })
}

document.querySelector('.get-new-gif').addEventListener('click', setNewGif);

function setNewGif() {
  // getNewGif().then((img) => console.log(img))
  let searchParameter = document.querySelector('.search-param').value.replaceAll(' ', '%20');
  console.log(`searchParameter: ${searchParameter}`);
  getNewGif((searchParameter) ? searchParameter : 'adama%20battlestar');
}