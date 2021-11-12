import { FETCH_DATA, USER_LANG } from './types';

export function fetchCurrency() {
  return async (dispatch) => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const currencyArray = await Object.entries(json.Valute);
    const arrayFiltered = await currencyArray.filter((item) => {
      return item[0] === 'USD' || item[0] === 'EUR' || item[0] === 'GBP';
    });
    dispatch({ type: FETCH_DATA, payload: arrayFiltered });
  };
}

export function getLanguage() {
  return async (dispatch) => {
    let lang = (await window.navigator.language) || navigator.userLanguage;
    dispatch({ type: USER_LANG, payload: lang });
  };
}
