import React from 'react';
import { Route } from 'react-router-dom';
import Entries from '../components/Entries';

export default () => (
  <Route
    children={({ history, location: { state } }) => {
      if (state && state.showModal) {
        return (<Entries
          history={history}
        />);
      }
      return null;
    }}
  />
);
