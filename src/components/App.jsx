import React, { Component } from 'react';

import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';

import { Title } from './ContactForm/ContactForm.style.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    JSON.parse(localStorage.getItem('contacts')) &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = data => {
    const { contacts } = this.state;
    const isContactExist = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [data, ...prev.contacts],
      }));
    }
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onDelete = e => {
    const { id } = e.target;
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onSubmit} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleItem} onClick={this.onDelete} />
      </div>
    );
  }
}
