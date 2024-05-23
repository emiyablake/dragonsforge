import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
