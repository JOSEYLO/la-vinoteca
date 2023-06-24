
// array de objetos
const products = [
  {
    name: 'Malacasta',
    seller: 'Rioja',
    image: 'assets/Malacasta-vino.png',
    price: 24.99,
  },
  {
    name: 'Ostatu',
    seller: 'Rioja',
    image: 'assets/riojaostatu-blanco-2022.jpg',
    price: 30,
  },
  {
    name: 'Taules',
    seller: 'Rioja',
    image: 'assets/les-taules-vinos-tinto-catalanes.jpg',
    price: 49,
  },
  {
    name: 'Imperial',
    seller: 'Rioja',
    image: 'assets/vino-tinto-rioja-imperial-reserva.jpg',
    price: 60,
  },
  {
    name: 'lote Roja Vega',
    seller: 'Rioja',
    image: 'assets/lote-rioja-Tradicionales_RV-3-Crianza-y-3-Reserva-470x599.jpg',
    price: 240,
  },
  {
    name: 'Prado Rey',
    seller: 'ribera del Duero',
    image: 'assets/adaro-de-pradorey-ribera-del-duero.jpg',
    price: 30,
  },
  {
    name: 'Convento',
    seller: 'Jumilla',
    image: 'assets/convento-san-francisco-roble-2020.jpg',
    price: 60,
  },
  {
    name: 'Flor de Pingus',
    seller: 'Ribera del Duero',
    image: 'assets/flor-de-pingus-2009.jpg',
    price: 200,
  },
  {
    name: 'TRUSS',
    seller: 'Ribera del Duero',
    image: 'assets/TRUS_RESERVA_ok-1.jpg',
    price: 30,
  },
  {
    name: 'Pesquera',
    seller: 'Ribera del Duero',
    image: 'assets/2359431797.jpg',
    price: 60,
  },
  {
    name: 'Teso de la Monja',
    seller: 'Toro',
    image: 'assets/teso-la-monja_anv800.jpg',
    price: 1200,
  },
  {
    name: 'Alabaster',
    seller: 'Ribera del Duero',
    image: 'assets/alabastereso-la-Monja-Alabaster.jpg',
    price: 140,
  },

];

// Constantes
const copyOfProducts = products.sort((productA, productB) => productB.price < productA.price ? 1 : -1);

const resetProducts = document.querySelector('#button-reset');
const searchButton = document.querySelector('#button-filter');
const boxContainer = document.getElementById("shop-container");



const getProducts = (product) => {
  return `
  <div class="box">
    <div class="image">
      <img src=${product.image} alt="${product.name}" >
    </div>
    <div class="contenido">
      <h4>${product.name}</h4>
      <h4>${product.seller}</h4>
      <div class="price">${product.price}€</div>
    </div>
  </div>
  `;

};


const setupProductsList = (productToPrint) => {
  const boxContainer = document.querySelector('#shop-container');

  boxContainer.innerHTML = '';

  for (const product of productToPrint) {
    boxContainer.innerHTML += getProducts(product);
  }
};

const filtrarProductos = () => {
  const searchForSeller = document.getElementById("search-seller").value;
  const searchForPrice = document.getElementById("search-price").value;

  const productFiltered = products.filter((product) => {
    if (product.price <= searchForPrice || product.seller === searchForSeller) {
      return product;
    };
  });

  setupProductsList(productFiltered);
};

const resetObjects = () => {
  const boxContainer = document.querySelector('#shop-container');
  const searchForPrice = document.querySelector('input[type="number"]');
  const searchForSeller = document.getElementById("search-seller");

  boxContainer.innerHTML = '';
  setupProductsList(products);
  searchForPrice.value = '';
  searchForSeller.value = '';
};


const searchForPrice = document.querySelector('input[type="number"]');
const searchForSeller = document.getElementById("search-seller");

searchButton.addEventListener('click', filtrarProductos);
resetProducts.addEventListener('click', resetObjects);
window.addEventListener('load', () => setupProductsList(products));




