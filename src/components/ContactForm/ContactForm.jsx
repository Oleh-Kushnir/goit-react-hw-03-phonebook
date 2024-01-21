import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  PhonebookContainer,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.style.jsx';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeName = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.reset();
  };
  reset = () => {
    return this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookContainer>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            required
            onChange={this.changeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
          />

          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            required
            onChange={this.changeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
          />

          <Button type="submit">Add Contact</Button>
        </Form>
      </PhonebookContainer>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
