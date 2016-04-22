import React from 'react';

const Home = ({ patients, onFetchPatients }) => (
  <div>
    <input type="text" placeholder="search term" onChange={ (event) => onFetchPatients(event.target.value) } />
    <ul>
      {
        patients.map((patient) =>
          <li key={ patient.uuid }>{patient.display}</li>
        )
      }
    </ul>
  </div>
);

export default Home;
