import { FETCH_DATA } from './types';

export function fetchCurrency() {
  return async (dispatch) => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const currencyArray = await Object.entries(json.Valute);
    dispatch({ type: FETCH_DATA, payload: currencyArray });
  };
}
