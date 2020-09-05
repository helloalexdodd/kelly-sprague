import { useEffect } from 'react';
import Layout from '~/layouts';
import { Text, H1 } from '~/components/Typography';

export default function Home() {
  return (
    <Layout>
      <H1>Wholesale</H1>
      <Text type="bold">
        If you are a naturopath or healthcare professional looking for organic,
        high quality tinctures, I provide bulk single herb tinctures, bulk
        tincture blends, and custom tincture blends directly for patients. I
        also provide custom loose leaf tea blends and flower essences. Please
        contact me at{' '}
        <a
          href="#mailgo"
          data-address="hello"
          data-domain="kellysprague.ca"
          data-subject="Hello! 🌿✨😃"
        >
          hello@kellysprague.ca
        </a>{' '}
        for more info about pricing, availability, and process! If you’re
        interested in carrying any products in your online or brick and mortar,
        I’d love to hear from you! Please contact me at{' '}
        <a
          href="#mailgo"
          data-address="hello"
          data-domain="kellysprague.ca"
          data-subject="Hello! 🌿✨😃"
        >
          hello@kellysprague.ca
        </a>{' '}
        and I’ll send over a line sheet.
      </Text>
    </Layout>
  );
}
