import React, { useState } from "react";
import axios from "axios";
import './Classes.css';
import './Table.css';

//Base URL 
const baseUrlClasse = 'https://www.dnd5eapi.co/api/classes/';

//Create component
export default function Classes () {
  //State variables
  const [index, setIndex] = useState('');
  const [classesList, setClassesList] = useState([]);
  const [classDetails, setClassDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllClasses, setShowAllClasses] = useState(true);

  //Function to fetch classes from API
  const fetchAllClasses = () => {
    setLoading(true); 
    setError(null); 
    axios.get(baseUrlClasse)
      .then((response) => {
        setClassesList(response.data.results);
        setClassDetails(null);
        setLoading(false);
        setShowAllClasses(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  //Function to fetch details of a specific class from the API
  const fetchClassDetails = (classIndex) => {
    setLoading(true);
    setError(null);
    axios.get(`${baseUrlClasse}${classIndex}`)
      .then((response) => {
        setClassDetails(response.data);
        setClassesList([]);
        setLoading(false);
        setShowAllClasses(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };


  const handleSearch = () => {
    fetchClassDetails(index);
  };

  return (
    <div>
      <div className="header">
        <h1>Classes</h1>
        <button onClick={fetchAllClasses}>List Classes</button>
      </div>
      <div className="search">
        <input
          type="text"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          placeholder="Enter class index"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {classDetails && (
        <div className='containerTable'>
          <h2 className='nameclass'>{classDetails.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hit Die</td>
                <td>{classDetails.hit_die}</td>
              </tr>
              <tr>
                <td>Proficiencies</td>
                <td>
                  <ul>
                    {classDetails.proficiencies.map((prof) => (
                      <li key={prof.index}>{prof.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Saving throws</td>
                <td>
                  <ul>
                    {classDetails.saving_throws.map((savTrh) => (
                      <li key={savTrh.index}>{savTrh.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Starting equipment</td>
                <td>
                  <ul>
                    {classDetails.starting_equipment.map((strequipment) => (
                      <li key={strequipment.equipment.index}>{strequipment.equipment.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Starting equipment options</td>
                  <td>
                    <ul>
                      {classDetails.starting_equipment_options.map((strequipmentopt) => (
                        <li key={strequipmentopt.desc}>{strequipmentopt.desc},</li>
                      ))}
                    </ul>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {classesList.length > 0 && (
        <div className="classList">
          <h4>List of Classes:</h4>
          <ul>
            {classesList.map((item) => (
              <li key={item.index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
