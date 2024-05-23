import React from 'react';

function RaceList({ races }) {
  if (!races || races.length === 0) {
    return <div>No races found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Speed</th>
          <th>Ability Bonuses</th>
          <th>Alignment</th>
          <th>Age</th>
          <th>Size</th>
          <th>Languages</th>
          <th>Traits</th>
        </tr>
      </thead>
      <tbody>
        {races.map((race, index) => (
          <tr key={index}>
            <td>{race.name}</td>
            <td>{race.speed}</td>
            <td>
              {race.ability_bonuses.map((bonus, i) => (
                <div key={i}>
                  {bonus.ability_score.name}: +{bonus.bonus}
                </div>
              ))}
            </td>
            <td>{race.alignment}</td>
            <td>{race.age}</td>
            <td>{race.size} - {race.size_description}</td>
            <td>
              {race.languages.map((language, i) => (
                <div key={i}>{language.name}</div>
              ))}
            </td>
            <td>
              {race.traits.map((trait, i) => (
                <div key={i}>{trait.name}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RaceList;
