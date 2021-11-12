import { connect } from 'react-redux';

function CurrencyItem({ name, value, language, currencies }) {
  // console.log(value);
  console.log(currencies[1][1].Value / value);
  return (
    <section className='currencyItem'>
      <h3 className='currencyItem__name'>
        {name} {}
      </h3>
      <p className='currencyItem__value'>
        {language === 'ru'
          ? Math.round(parseFloat(value) * 100) / 100
          : Math.round((currencies[1][1].Value / value) * 100) / 100}
      </p>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.lang.lang,
    currencies: state.currencyList.currency,
  };
};

export default connect(mapStateToProps, null)(CurrencyItem);
