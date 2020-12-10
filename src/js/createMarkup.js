import refs from './refs'
import countriesTemplate from '../templates/countriesTemplate.hbs';
import oneCountryTemplate from '../templates/oneCountryTemplate.hbs';

function countriesMarkup(data){
  refs.content.insertAdjacentHTML(
    'beforeend',
    countriesTemplate(data),
  );
}

function OneCountryMarkup(data){
  refs.content.insertAdjacentHTML(
    'beforeend',
    oneCountryTemplate(...data),
  );
}

export {countriesMarkup, OneCountryMarkup};
