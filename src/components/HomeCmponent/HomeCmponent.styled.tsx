import styled from '@emotion/styled';

export const Section = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
`;

export const Container1 = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;

  &.container_one {
    grid-column: span 1;
    grid-row: span 3;
  }

  &.container_seven {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

// export const Container2 = styled.div``;

// export const Container3 = styled.div``;

// export const Container4 = styled.div``;

// export const Container5 = styled.div``;

// export const Container6 = styled.div``;

// export const Container7 = styled.div``;

// export const Container8 = styled.div``;

// export const Container9 = styled.div``;
