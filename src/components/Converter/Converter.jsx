import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Converter({ currency, language }) {
  const [currencyInputValue, setCurrencyInputValue] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState('');
  const [currentResultCurrency, setCurrentResultCurrency] = useState('');
  const [currencyResultValue, setCurrencyResultValue] = useState(0);

  useEffect(() => {
    if (language === 'ru') {
      setCurrentResultCurrency('RUR');
    } else {
      setCurrentResultCurrency('USD');
    }
  }, [language]);

  useEffect(() => {
    setCurrencyInputValue(0);
    setCurrencyResultValue(0);
  }, [currentCurrency]);

  const handleCurrencyInputValue = (e) => {
    setCurrencyInputValue(e.target.value);
    if (currentResultCurrency === 'RUR') {
      switch (currentCurrency) {
        case 'GBP': {
          return setCurrencyResultValue(
            (e.target.value *
              Math.round(parseFloat(currency[0][1].Value) * 100)) /
              100
          );
        }
        case 'USD': {
          return setCurrencyResultValue(
            (e.target.value *
              Math.round(parseFloat(currency[1][1].Value) * 100)) /
              100
          );
        }
        case 'EUR': {
          return setCurrencyResultValue(
            (e.target.value *
              Math.round(parseFloat(currency[2][1].Value) * 100)) /
              100
          );
        }
        default: {
          setCurrencyInputValue(0);
        }
      }
    }

    if (currentResultCurrency === 'USD') {
      switch (currentCurrency) {
        case 'GBP': {
          return setCurrencyResultValue(
            Math.round(
              parseFloat(
                (currency[0][1].Value / currency[1][1].Value) *
                  e.target.value *
                  100
              )
            ) / 100
          );
        }
        case 'USD': {
          return setCurrencyResultValue(
            Math.round(
              parseFloat(
                (currency[1][1].Value / currency[1][1].Value) *
                  e.target.value *
                  100
              )
            ) / 100
          );
        }
        case 'EUR': {
          return setCurrencyResultValue(
            Math.round(
              parseFloat(
                (currency[2][1].Value / currency[1][1].Value) *
                  e.target.value *
                  100
              )
            ) / 100
          );
        }
        case 'RUR': {
          return setCurrencyResultValue(
            Math.round(
              parseFloat((e.target.value / currency[1][1].Value) * 100)
            ) / 100
          );
        }
        default: {
          setCurrencyInputValue(0);
        }
      }
    }
  };

  const handleCurrentCurrency = (e) => {
    if (e.target.value === 'Выберите валюту') {
      return;
    }

    setCurrentCurrency(e.target.value);
  };

  const handleCurrencyResultValue = () => {};

  return (
    <section className='converter'>
      <div className='container converter__header'>
        <h3>Конвертер валют</h3>
      </div>

      <div className='converter__container'>
        <input
          type='text'
          placeholder={currencyInputValue}
          value={currencyInputValue}
          onChange={handleCurrencyInputValue}
          className='converter__input'
        />
        <select onChange={handleCurrentCurrency} className='converter__select'>
          <option className='converter__option'>Выберите валюту</option>
          {language === 'en-US' ? <option>RUR</option> : ''}
          {currency.map((item) => (
            <option key={item[1].ID}>{item[0]}</option>
          ))}
        </select>

        <p className='converter__text' onChange={handleCurrencyResultValue}>
          {currencyResultValue} {currentResultCurrency}
        </p>
      </div>
      <Link to='/currency-list'>
        <button className='redirect converter__redirect'>Таблица валют</button>
      </Link>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencyList.currency,
    language: state.lang.lang,
  };
};

export default connect(mapStateToProps, null)(Converter);
