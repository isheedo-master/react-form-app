import React, { Component, Fragment } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ListGroup,
  ListGroupItem,
  Collapse,
  CardBody,
  Card,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { ListWrapper, EntriesWrapper } from './styles';

class Entries extends Component {
  state = {};

  onClose = () => {
    const { history, entries } = this.props;
    history.push({ state: { showModal: null } });
  };

  onEntryToggle = entryId => {
    if (this.state[entryId]) {
      this.setState({
        [entryId]: !this.state[entryId],
      });
    } else {
      this.setState({
        [entryId]: true,
      })
    }
  }

  render() {
    const { entries } = this.props;
    return (
      <EntriesWrapper
        isOpen
        size="lg"
        toggle={this.onClose}
      >
        <ModalHeader toggle={this.onClose}>
          Validated entries
      </ModalHeader>
        <ModalBody>
          {entries.length > 0 ? (
            <ListGroup flush>
              {entries.map(entry => (
                <ListWrapper key={entry.id}>
                  <Button
                    size="sm"
                    onClick={() => this.onEntryToggle(entry.id)}
                  >
                    {this.state[entry.id] ? '-' : '+'}
                  </Button>{'    '}
                  {`${entry.name} ${entry.surname}`}
                  <Collapse
                    isOpen={this.state[entry.id]}
                  >
                    <Card>
                      <CardBody>
                        <p><strong>Email: </strong>{entry.email}</p>
                        <p><strong>Phone: </strong>{entry.phone}</p>
                        <p><strong>Email: </strong>{entry.email}</p>
                        <p><strong>Address: </strong>{entry.address}</p>
                        {entry.zip && (
                          <Fragment>
                            <strong>ZIP code: </strong>{entry.zip}
                          </Fragment>
                        )}
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListWrapper>
              ))}
            </ListGroup>
          ) : 'No entries so far, submit some using the main form'}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.onClose}>
            Close
        </Button>
        </ModalFooter>
      </EntriesWrapper>
    );
  }
}

Entries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object.isRequired,
};

export default Entries;

