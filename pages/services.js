import { Text, H1, H2 } from '~/components/Typography';

export default function Home() {
  return (
    <>
      <Text type="bold">
        Herbs can be used to support the body and address concerns including but
        not limited to:
      </Text>
      <ul>
        <li>
          <Text>
            Hormonal imbalances (PMS, painful periods, menstrual migraines,
            etc.)
          </Text>
        </li>
        <li>
          <Text>Anxiety</Text>
        </li>
        <li>
          <Text>Fatigue</Text>
        </li>
        <li>
          <Text>Immune health</Text>
        </li>
        <li>
          <Text>Digestive health</Text>
        </li>
        <li>
          <Text>Skin issues</Text>
        </li>
        <li>
          <Text>Stress management</Text>
        </li>
        <li>
          <Text>Sleep</Text>
        </li>
        <li>
          <Text>Thyroid health</Text>
        </li>
      </ul>
      <Text type="bold">
        To book an appointment, contact me directly at{' '}
        <a
          href="#mailgo"
          data-address="hello"
          data-domain="kellysprague.ca"
          data-subject="Hello! 🌿✨😃"
        >
          hello@kellysprague.ca
        </a>{' '}
      </Text>
      <Text type="bold">
        All appointments are currently virtual, through phone or video.
      </Text>
      <H2>What is an appointment like?</H2>
      <Text>
        When we meet for your appointment, we’ll sit and chat without judgement
        about, well, you! Your current and past health, in what areas you’d like
        to feel better, your acute or chronic concerns. We’ll develop a plan
        tailored to you, centered around a custom botanical protocol. This could
        include a tincture blend (an alcohol extract), a tea blend, flower
        essences, and in some cases even herbs used externally like salves,
        steams, and rinses - all depending on your preferences and what fits.
      </Text>
      <Text>
        The beauty of working with a bespoke herbal blend is that every herb is
        specific to you and your needs, and we can make shifts in the formula to
        follow shifts in your body and mind (some kind of sparkle emoji) Herbal
        protocols can be used as a primary support within the full plan we
        develop together, but they also work well alongside other protocols you
        may be following.
      </Text>
      <Text>
        I handmake all formulas using organic herbs whenever possible.
      </Text>
    </>
  );
}
