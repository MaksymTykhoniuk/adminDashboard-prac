import styled from '@emotion/styled';

export const PieChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2``;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const OptionsWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
`;

export const OptionsElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ElementInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CustomDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
`;

export const ElementTitle = styled.p``;

export const ElementValue = styled.span``;
