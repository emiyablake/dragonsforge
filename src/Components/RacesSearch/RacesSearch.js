import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [racesList, setRacesList] = useState([]);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch('https://www.dnd5eapi.co/api/races');
        if (response.ok) {
          const data = await response.json();
          setRacesList(data.results.map(race => race.index));
        }
      } catch (error) {
        console.error('Error fetching races:', error);
      }
    };

    fetchRaces();
  }, []);

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <p>Pesquisa de raças</p>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {racesList.map((race, index) => (
          <li key={index} style={{ marginRight: '10px' }}>{race}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a race..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
