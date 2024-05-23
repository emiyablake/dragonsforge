import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import SearchBar from './Components/RacesSearch/RacesSearch';
import RaceList from './Components/RacesSearch/RaceList';
import React, { useState } from 'react';

function App() {
  const [races, setRaces] = useState([])
  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/races/${query}`);
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
        setRaces([data]);  // Ajuste para lidar com uma lista
      } else {
        setRaces([]);  // Nenhum resultado encontrado
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setRaces([]);
    }
  };

  return (
    <div className="App">
      <Header />
      <body className='App-body'>
        <Main />
        <SearchBar onSearch={handleSearch}/>
        <RaceList races={races} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
