import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import { MessageWrapper } from './styles';

const SystemMessage = ({ history }) => {
  const toggle = () => {
    history.push({ state: { showMessage: null, message: null } });
  };
  return (
    <MessageWrapper>
      <Alert color="success" toggle={toggle}>
        {history.location.state.message}
      </Alert>
    </MessageWrapper>
  );
};

SystemMessage.propTypes = {
  history: PropTypes.object.isRequired, //eslint-disable-line
};

export default SystemMessage;
