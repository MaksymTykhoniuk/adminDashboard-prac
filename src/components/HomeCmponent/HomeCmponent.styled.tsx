import styled from '@emotion/styled';

export const Section = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
`;

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;

  &.container_tall {
    grid-column: span 1;
    grid-row: span 3;
  }

  &.container_horizontal {
    grid-column: span 2;
    grid-row: span 2;
  }
`;
