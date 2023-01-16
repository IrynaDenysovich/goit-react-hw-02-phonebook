import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerForm,
  LabelForm,
  InputForm,
  ButtonForm,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ContainerForm>
          <LabelForm>
            Name
            <InputForm
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              placeholder=" "
              onChange={this.handleChange}
            />
          </LabelForm>
          <LabelForm>
            Number
            <InputForm
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder=" "
              value={this.state.number}
              onChange={this.handleChange}
            />
          </LabelForm>
          <ButtonForm type="submit">Add contact</ButtonForm>
        </ContainerForm>
      </form>
    );
  }
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
