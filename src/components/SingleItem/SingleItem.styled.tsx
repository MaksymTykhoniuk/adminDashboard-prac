import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// _____

export const ViewWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const InfoWrapper = styled.div`
  &::after {
    content: '';
    display: block;
    width: 90%;
    height: 0.5px;
    background: #ddd;
    border-radius: 10px;
  }
`;

export const ChartWrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 400px;
`;

// _____

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
`;

export const UpdateBtn = styled.button``;

// _____

export const Details = styled.ul`
  list-style: none;
  font-size: 18px;
`;

export const DetailsItem = styled.li`
  display: flex;

  margin: 30px 0;
`;

export const DetailTitle = styled.p`
  font-weight: 600;
  text-transform: capitalize;
  margin-right: 10px;
`;

export const DetailValue = styled.p``;

// _____
export const ActivitiesWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ActivitiesTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ActivitiesList = styled.ul``;

export const ActivityItem = styled.li`
  list-style: none;
  position: relative;
  width: 1px;
  padding-top: 50px;
  background: #f45b69;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f45b69;
    transform: translate(-50%, 50%);
  }
`;

export const ItemWrapper = styled.div`
  min-width: 480px;
  padding: 15px;
  background-color: #f45b6810;
`;

export const ItemText = styled.p`
  margin-bottom: 5px;
`;

export const ItemDate = styled.time`
  font-size: 12px;
  color: #dddddda7;
`;
