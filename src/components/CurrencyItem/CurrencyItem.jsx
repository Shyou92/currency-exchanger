function CurrencyItem({ name, value }) {
  return (
    <section className='currencyItem'>
      <h3 className='currencyItem__name'>{name}</h3>
      <p className='currencyItem__value'>{value}</p>
    </section>
  );
}

export default CurrencyItem;
