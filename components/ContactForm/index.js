import axios from 'axios';
import { Text } from '~/components/Typography';

import { Form, InnerContainer, Button } from './ContactForm.style';

const ContactForm = () => {
  const [formReceived, setFormReceived] = React.useState(false);

  const handleError = (err) => {
    console.log(err);
  };

  const handleOnChange = (e) => {
    const { value, classList } = e.target;
    if (value.length) {
      classList.add('has-content');
    } else {
      classList.remove('has-content');
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/contact',
        data: { name, email, message },
      });
      console.log(res.data.msg);
      if (res.data.msg === 'success') {
        document.getElementById('contact-form').reset();
        setFormReceived('Submission Recieved!');
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <Form method="POST" id="contact-form" onSubmit={handleOnSubmit}>
      <InnerContainer>
        <input
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
        {formReceived && <Text>{formReceived}</Text>}
        <Button type="submit" disabled={formReceived}>
          Submit
        </Button>
      </InnerContainer>
    </Form>
  );
};

export default ContactForm;
