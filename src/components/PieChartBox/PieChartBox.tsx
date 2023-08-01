import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import {
  PieChartWrapper,
  Title,
  ChartWrapper,
  OptionsWrapper,
  OptionsElement,
  ElementTitle,
  ElementValue,
  ElementInfo,
  CustomDot,
} from './PieChartBox.styled';

const data = [
  { name: 'Mobile', value: 400, color: '#0088FE' },
  { name: 'Desktop', value: 300, color: '#00C49F' },
  { name: 'Laptop', value: 300, color: '#FFBB28' },
  { name: 'Tablet', value: 200, color: '#FF8042' },
];

const PieChartBox = () => {
  return (
    <PieChartWrapper>
      <Title>Leads by Source</Title>
      <ChartWrapper>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: '#fff', borderRadius: '5px' }}
              //   labelStyle={{ display: 'none' }}
              //   cursor={{ fill: 'none' }}
            />
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map(item => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <OptionsWrapper>
        {data.map(item => (
          <OptionsElement key={item.name}>
            <ElementInfo>
              <CustomDot style={{ background: item.color }} />
              <ElementTitle>{item.name}</ElementTitle>
            </ElementInfo>

            <ElementValue>{item.value}</ElementValue>
          </OptionsElement>
        ))}
      </OptionsWrapper>
    </PieChartWrapper>
  );
};

export default PieChartBox;
