import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import FormWithValidation from '../Form';
import Dialogs from '../Dialogs';
import { setEntries } from '../../actions';
import { AppWrapper } from './styles';
import baseStyles from '../../styles/baseStyles';

class App extends Component {

  onSubmit = values => {
    const { dispatch } = this.props;
    dispatch(setEntries({
      id: uuid(),
      ...values
    }));
  }

  toggleSystemMessage = () => {
    const { history } = this.props;
    history.push({ state: { showMessage: true, message: 'New valid entry added successfully' } });
    setTimeout(
      () => {
        history.push({ state: { showMessage: null, message: null } });
      }, 4000
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries !== this.props.entries) {
      this.toggleSystemMessage();
    }
  }


  render() {
    baseStyles();
    const { entries, history } = this.props ;
    return (
      <AppWrapper>
        <h1 className="text-center text-white">Awesome form</h1>
        <FormWithValidation onSubmit={this.onSubmit} history={history} />
        <Dialogs entries={entries} />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});

export default connect(mapStateToProps)(App);
