import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import {
  SectionWrapper,
  InfoWrapper,
  ChartWrapper,
  TitleWrapper,
  ChartIcon,
  ChartTitle,
  Amount,
  ViewAllLink,
  ChartText,
  Chart,
  Percentage,
  Duration,
} from './Charts.styled';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const Charts = (props: Props) => {
  const { color, icon, title, dataKey, number, percentage, chartData } = props;

  return (
    <SectionWrapper>
      <InfoWrapper>
        <TitleWrapper>
          <ChartIcon src={icon} alt="chart icon" />
          <ChartTitle>{title}</ChartTitle>
        </TitleWrapper>

        <Amount>{number}</Amount>
        <ViewAllLink to="*">View all</ViewAllLink>
      </InfoWrapper>

      <ChartWrapper>
        <Chart>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Chart>
        <ChartText>
          <Percentage
            style={{ color: percentage > 0 ? '#0ccb2cbd' : 'tomato' }}
          >
            {percentage}%
          </Percentage>
          <Duration>this month</Duration>
        </ChartText>
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default Charts;
