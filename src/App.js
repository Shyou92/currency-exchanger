import CurrencyList from './components/CurrencyList/CurrencyList';

function App() {
  let lang = window.navigator.language || navigator.userLanguage;
  if (lang !== 'en-US') {
    console.log(lang);
  }
  return (
    <div className='App'>
      <CurrencyList />
    </div>
  );
}

export default App;
