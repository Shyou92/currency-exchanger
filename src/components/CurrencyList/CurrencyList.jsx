import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from '../../redux/action';
import CurrencyItem from '../CurrencyItem/CurrencyItem';

function CurrencyList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const currency = useSelector((state) => {
    return state.currencyList.currency;
  });

  return (
    <section className='currencyList'>
      <div className='currencyList__header'>
        <p className='currencyList__header-name'>Валюта</p>
        <p className='currencyList__header-value'>Курс валют</p>
      </div>
      {currency.map((item) => {
        return (
          <CurrencyItem
            key={item[0]}
            name={item[1].Name}
            value={item[1].Value}
          />
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencyList.currency,
    language: state.lang.lang,
  };
};

export default connect(mapStateToProps, null)(CurrencyList);
