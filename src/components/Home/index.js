import React from 'react';

const Home = ({ patients, onFetchPatients }) => (
  <div>
    <button onClick={onFetchPatients} >Fetch Patients</button>
    <ul>
      {
        patients.map((patient) =>
          <li key={ patient.id }>{patient.name}</li>
        )
      }
    </ul>
  </div>
);

export default Home;
