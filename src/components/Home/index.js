import React from 'react';

const Home = ({ patients, onFetchPatients }) => (
  <div>
    <input type="text" placeholder="search term" />
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
