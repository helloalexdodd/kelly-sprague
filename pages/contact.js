import Layout from '~/layouts';
import { Text, H1, H2 } from '~/components/Typography';
import ContactForm from '~/components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <H1>Contact</H1>
      <Text type="bold">I WOULD LOVE TO HEAR FROM YOU.</Text>
      <Text>
        Whether you have questions about consultations, formulas, accessing low
        or no cost resources, or just want to chat about herbs - please reach
        out! I also provide workshops and in-house consultations to companies
        looking to take care of their employees.
      </Text>
      <Text>
        email: 
        <a
          href="#mailgo"
          data-address="hello"
          data-domain="kellysprague.ca"
          data-subject="Hello! 🌿✨😃"
        >
          hello@kellysprague.ca
        </a>
      </Text>
      <Text>
        instagram:{' '}
        <a
          href="https://instagram.com/_u/heldherbals"
          target="_blank"
          rel="noreferrer noopener"
        >
          @heldherbals
        </a>
      </Text>
      {/* <ContactForm /> */}
    </Layout>
  );
}
