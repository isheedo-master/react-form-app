import styled from 'styled-components';
import { ListGroupItem, Modal } from 'reactstrap';

export const EntriesWrapper = styled(Modal)`
  max-height: 90vh;
  overflow-y: auto;
  pointer-events: initial !important;
`;

export const ListWrapper = styled(ListGroupItem)`
  button {
    margin-right: 10px;
  }

  .card {
    margin-top: 10px;
    margin-left: 40px;
  }
`;
