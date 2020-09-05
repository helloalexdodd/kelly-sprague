import Layout from '~/layouts';
import { Text, H1, H2 } from '~/components/Typography';

export default function Home() {
  return (
    <Layout>
      <H1>Services</H1>
      <Text type="bold">
        When we meet for your appointment, we’ll sit and chat without judgement
        about, well, you! Your current and past health, in what areas you’d like
        to feel better, your acute or chronic, longstanding concerns. We’ll
        develop a plan tailored to you, centered around a custom botanical
        protocol. This could include a tincture blend (an alcohol extract), a
        tea blend, flower essences, and in some cases even herbs used externally
        like salves, steams, and rinses - all depending on your preferences and
        what fits. The beauty of working with a bespoke herbal blend is that
        every herb is specific to you and your needs, and we can make shifts in
        the formula to follow shifts in your body and mind (some kind of sparkle
        emoji). Herbal protocols can be used as a primary support within the
        full plan we develop together, but they also work well alongside other
        protocols you may be following. Herbs are potent medicine, but fun
        medicine, too. I am offering low and no-cost formulas for BIPOC both
        locally and elsewhere. Please email me directly at{' '}
        <a
          href="#mailgo"
          data-address="hello"
          data-domain="kellysprague.ca"
          data-subject="Hello! 🌿✨😃"
        >
          hello@kellysprague.ca
        </a>{' '}
        to access.
      </Text>
    </Layout>
  );
}
