import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { BarChartWrapper, Title, ChartWrapper } from './BarCharts.styled';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarCharts = (props: Props) => {
  const { title, color, dataKey, chartData } = props;

  return (
    <BarChartWrapper>
      <Title>{title}</Title>
      <ChartWrapper>
        <ResponsiveContainer width="99%" height={146}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </BarChartWrapper>
  );
};

export default BarCharts;
