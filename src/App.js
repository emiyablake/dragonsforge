import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <body className='App-body'>
        <Main />
      </body>
      <Footer />
    </div>
  );
}

export default App;
