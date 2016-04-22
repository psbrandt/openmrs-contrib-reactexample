import React from 'react';

const Home = ({ patients, onFetchPatients, updateSearchTerm }) => (
  <div>
    <input type="text" placeholder="search term" onChange={ (event) => updateSearchTerm(event.target.value) } />
    <button onClick={ () => onFetchPatients('Jac') } >Fetch Patients</button>
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
