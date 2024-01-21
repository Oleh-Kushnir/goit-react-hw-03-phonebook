import PropTypes from 'prop-types';

import {
  PhonebookListStyled,
  PhonebookListItem,
  PhonebookListWrap,
  DeleteButton,
} from './ContactList.style';



const ContactList = ({ contacts, onClick }) => {
  return (
    <PhonebookListWrap>
      <PhonebookListStyled>
        {contacts.map(el => {
          return (
            <PhonebookListItem key={el.id}>
              {el.name}:{el.number}
              <DeleteButton type="button" onClick={onClick} id={el.id}>
                Delete
              </DeleteButton>
            </PhonebookListItem>
          );
        })}
      </PhonebookListStyled>
    </PhonebookListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
