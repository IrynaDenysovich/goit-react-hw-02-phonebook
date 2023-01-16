import PropTypes from 'prop-types';
import { ContainertList, ListContact, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contact, onDelete }) => {
  return (
    <ContainertList>
      {contact.map(({ number, name, id }) => {
        return (
          <ListContact key={id}>
            {name}: {number}
            <BtnDelete onClick={() => onDelete(id)}> Delete</BtnDelete>
          </ListContact>
        );
      })}
    </ContainertList>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
