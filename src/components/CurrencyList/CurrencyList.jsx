import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CurrencyItem from '../CurrencyItem/CurrencyItem';

function CurrencyList() {
  const currency = useSelector((state) => {
    return state.currencyList.currency;
  });

  return (
    <section className='currencyList'>
      <div className='container'>
        <h3 className='container__header-name'>Валюта</h3>
        <h3 className='container__header-value'>Курс валют</h3>
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

      <Link exact='true' to='/'>
        <button className='redirect'>На главную</button>
      </Link>
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
