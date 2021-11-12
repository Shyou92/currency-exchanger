import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLanguage } from './redux/action';
import CurrencyList from './components/CurrencyList/CurrencyList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  return (
    <div className='App'>
      <CurrencyList />
    </div>
  );
}

export default App;
