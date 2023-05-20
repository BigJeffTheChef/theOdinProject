import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const imgs = [
  { src: "/animals/armadillo.png", alt: "armadillo" },
  { src: "/animals/fox.png", alt: "fox" },
  { src: "/animals/giraffe.png", alt: "giraffe" },
  { src: "/animals/hippo.png", alt: "hippo" },
  { src: "/animals/kangaroo.png", alt: "kangaroo" },
  { src: "/animals/parrot.png", alt: "parrot" },
  { src: "/animals/pig.png", alt: "pig" },
  { src: "/animals/tiger.png", alt: "tiger" },
  { src: "/animals/zebra.png", alt: "zebra" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App imgs={imgs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
