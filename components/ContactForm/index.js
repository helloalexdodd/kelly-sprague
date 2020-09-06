import { useState, useReducer } from 'react';
import axios from 'axios';
import { Text } from '~/components/Typography';
import { Form, InnerContainer, Button } from './ContactForm.style';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const ContactForm = () => {
  const [formReceived, setFormReceived] = useState(false);
  const [formFeedback, setFormFeedback] = useState('');
  const [error, setError] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) => {
    const { name, value, classList } = e.target;
    if (value.length) {
      classList.add('has-content');
    } else {
      classList.remove('has-content');
    }
    dispatch({ field: name, value });
  };

  const { name, email, message } = state;

  const handleError = (err) => {
    setError(true);
    setFormFeedback(err.message);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'POST',
        url: `/api/contact`,
        data: { name, email, message },
      });

      if (res.data.msg === 'success') {
        setError(false);
        setFormReceived(true);
        setFormFeedback('Submission Received! Thank-you so much!');
      }
    } catch (err) {
      handleError(err?.response?.data.details[0]);
    }
  };

  return (
    <Form method="POST" onSubmit={handleOnSubmit}>
      <InnerContainer>
        <input
          value={name}
          className="effect"
          type="text"
          id="name"
          name="name"
          required
          disabled={formReceived}
          onChange={handleOnChange}
        />
        <label htmlFor="name">Name</label>
        <span className="focus-border"></span>
      </InnerContainer>
      <InnerContainer>
        <input
          value={email}
          className="effect"
          type="text"
          id="email"
          name="email"
          required
          disabled={formReceived}
          onChange={handleOnChange}
        />
        <label htmlFor="email">Email</label>
        <span className="focus-border"></span>
      </InnerContainer>
      <InnerContainer>
        <textarea
          value={message}
          className="effect"
          id="message"
          name="message"
          required
          disabled={formReceived}
          onChange={handleOnChange}
        />
        <label htmlFor="message">Message</label>
        <span className="focus-border"></span>
      </InnerContainer>
      <InnerContainer>
        <Text error={error}>{formFeedback && formFeedback}</Text>
        <Button type="submit" disabled={!!formReceived}>
          Submit
        </Button>
      </InnerContainer>
    </Form>
  );
};

export default ContactForm;
