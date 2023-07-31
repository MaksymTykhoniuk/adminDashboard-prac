import Charts from '../Charts/Charts';
import TopDeals from '../TopDeals/TopDeals';
import { Section, Container } from './HomeCmponent.styled';
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
} from '../../../data';

const HomeCmponent = () => {
  return (
    <Section>
      <Container className="container_one">
        <TopDeals />
      </Container>

      <Container>
        <Charts {...chartBoxUser} />
      </Container>

      <Container>
        <Charts {...chartBoxProduct} />
      </Container>

      <Container className="container_one">Container4</Container>

      <Container>
        <Charts {...chartBoxConversion} />
      </Container>

      <Container>
        <Charts {...chartBoxRevenue} />
      </Container>

      <Container className="container_seven">Container7</Container>

      <Container>Container8</Container>

      <Container>Container9</Container>
    </Section>
  );
};

export default HomeCmponent;
