import Charts from '../Charts/Charts';
import TopDeals from '../TopDeals/TopDeals';
import { Section, Container } from './HomeCmponent.styled';
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxVisit,
  barChartBoxRevenue,
} from '../../../data';
import BarChart from '../BarCharts/BarCharts';
import PieChartBox from '../PieChartBox/PieChartBox';
import BigChart from '../BigChart/BigChart';

const HomeCmponent = () => {
  return (
    <Section>
      <Container className="container_tall">
        <TopDeals />
      </Container>

      <Container>
        <Charts {...chartBoxUser} />
      </Container>

      <Container>
        <Charts {...chartBoxProduct} />
      </Container>

      <Container className="container_tall">
        <PieChartBox />
      </Container>

      <Container>
        <Charts {...chartBoxConversion} />
      </Container>

      <Container>
        <Charts {...chartBoxRevenue} />
      </Container>

      <Container className="container_horizontal">
        <BigChart />
      </Container>

      <Container>
        <BarChart {...barChartBoxVisit} />
      </Container>

      <Container>
        <BarChart {...barChartBoxRevenue} />
      </Container>
    </Section>
  );
};

export default HomeCmponent;
