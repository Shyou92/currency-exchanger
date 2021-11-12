import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCurrency } from './redux/action';

function App({ currencies }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const currency = useSelector((state) => {
    return state.currencyList.currency;
  });
  const arr = [];

  console.log(currency);
  return (
    <div className='App'>
      {/* <button onClick={() => dispatch(fetchCurrency())}>Click</button> */}
      <div>{currency.map((item) => console.log(item))}</div>
      <div>Валюта</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencyList.currency,
  };
};
// const mapDispatchToProps =

export default connect(mapStateToProps, null)(App);
