import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Entries from './Entries';
import SystemMessage from './SystemMessage';

const Dialogs = ({ entries }) => (
  <Route
    children={({ history, location: { state } }) => { //eslint-disable-line
      if (state && state.showModal) {
        return (
          <Entries
            history={history}
            entries={entries}
          />
        );
      } if (state && state.showMessage) {
        return (
          <SystemMessage
            history={history}
          />
        );
      }
      return null;
    }}
  />
);

Dialogs.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dialogs;
