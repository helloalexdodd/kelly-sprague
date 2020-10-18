import Layout from '~/layouts';
import { Text, H2 } from '~/components/Typography';

export default function Home() {
  return (
    <Layout>
      <Text type="bold">
        Drawing on over a decade of personal and professional work with bodies,
        nutrition, and plants, I (she/her) work with clients to develop unique
        treatment plans and blend custom botanical formulas. My aim is to find
        manageable starting points, address barriers to change, and to meet you
        wherever you’re at without judgement.
      </Text>
      <Text type="bold">
        Prior to completing Diane Kent’s Clinical Herbalism program with a focus
        on the holistic understanding of the medical sciences in 2019, I trained
        and practiced as a Registered Massage Therapist. I also studied Holistic
        Nutrition and provided individual, hands-on nutrition support.
      </Text>
      <H2>What is herbalism?</H2>
      <Text type="bold">
        Herbalism or herbal medicine is working with plants to address illness
        or imbalance and support full body health. Herbs are living entities in
        relationship with their own ecosystem and the larger ecosystem of the
        earth, as well as tools and teachers we can use to foster our own
        health. They are powerful allies for humans looking for support in such
        a wide variety of areas - hormonal health, menstrual issues, stress,
        burnout, anxiety, the immune system, sleep, among the most common. As a
        herbalist, rather than taking a ‘this herb for that’ approach to those
        issues, I focus on you as an individual and how each herb acts in
        relationship to your specific constitution.
      </Text>
    </Layout>
  );
}
