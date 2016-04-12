import React from 'react';
import { connect } from 'react-redux';
import fetchPatients from '../../actions/fetchPatients';
import Home from '../../components/Home';

const HomeContainer = (props) => (
  <Home {...props} />
);

const mapStateToProps = (state) => (
  {
    patients: state.patients,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onFetchPatients: () => {
      dispatch(fetchPatients());
    },
  }
);

const decoratedHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default decoratedHome;
