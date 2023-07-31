import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SectionWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChartIcon = styled.img`
  display: block;
`;

export const ChartTitle = styled.span`
  font-size: 14px;
`;

export const Amount = styled.h2``;

export const ViewAllLink = styled(Link)`
  color: #1e54b9;
`;

export const ChartWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chart = styled.div`
  height: 100%;
  width: 100%;
`;

export const ChartText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Percentage = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Duration = styled.span``;
