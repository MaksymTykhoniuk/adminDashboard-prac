import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  SectionWrapper,
  ViewWrapper,
  ActivitiesWrapper,
  InfoWrapper,
  ChartWrapper,
  HeaderInfo,
  Details,
  Image,
  Title,
  UpdateBtn,
  DetailsItem,
  DetailTitle,
  DetailValue,
  ActivitiesTitle,
  ActivitiesList,
  ActivityItem,
  ItemWrapper,
  ItemText,
  ItemDate,
} from './SingleItem.styled';

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const SingleItem = (props: Props) => {
  return (
    <SectionWrapper>
      <ViewWrapper>
        <InfoWrapper>
          <HeaderInfo>
            {props.img && <Image src={props.img} alt="item image" />}
            <Title>{props.title}</Title>
            <UpdateBtn>update</UpdateBtn>
          </HeaderInfo>
          <Details>
            {Object.entries(props.info).map(el => (
              <DetailsItem key={el[0]}>
                <DetailTitle>{el[0]} : </DetailTitle>
                <DetailValue>{el[1]}</DetailValue>
              </DetailsItem>
            ))}
          </Details>
        </InfoWrapper>
        <ChartWrapper>
          {props.chart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map(el => (
                  <Line type="monotone" dataKey={el.name} stroke={el.color} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </ChartWrapper>
      </ViewWrapper>
      <ActivitiesWrapper>
        <ActivitiesTitle> Latest Activities </ActivitiesTitle>
        {props.activities && (
          <ActivitiesList>
            {props.activities.map(el => (
              <ActivityItem key={el.text}>
                <ItemWrapper>
                  <ItemText>{el.text}</ItemText>
                  <ItemDate>{el.time}</ItemDate>
                </ItemWrapper>
              </ActivityItem>
            ))}
          </ActivitiesList>
        )}
      </ActivitiesWrapper>
    </SectionWrapper>
  );
};

export default SingleItem;
