import Charts from '../Charts/Charts';
import TopDeals from '../TopDeals/TopDeals';
import {
  Section,
  Container1,
  // Container2,
  // Container3,
  // Container4,
  // Container5,
  // Container6,
  // Container7,
  // Container8,
  // Container9,
} from './HomeCmponent.styled';

const HomeCmponent = () => {
  return (
    <Section>
      <Container1 className="container_one">
        <TopDeals />
      </Container1>

      <Container1>
        <Charts />
      </Container1>

      <Container1>
        <Charts />
      </Container1>

      <Container1 className="container_one">Container4</Container1>

      <Container1>
        <Charts />
      </Container1>

      <Container1>
        <Charts />
      </Container1>

      <Container1 className="container_seven">Container7</Container1>

      <Container1>Container8</Container1>

      <Container1>Container9</Container1>
    </Section>
  );
};

export default HomeCmponent;
