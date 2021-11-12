import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLanguage } from './redux/action';
import { Routes, Route } from 'react-router-dom';
import { fetchCurrency } from './redux/action';
import Converter from './components/Converter/Converter';
import CurrencyList from './components/CurrencyList/CurrencyList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route exact='true' path='/' element={<Converter />} />
        <Route path='/currency-list' element={<CurrencyList />} />
      </Routes>
    </div>
  );
}

export default App;
