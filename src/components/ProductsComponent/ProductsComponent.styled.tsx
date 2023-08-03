import styled from '@emotion/styled';

export const SectionWrapper = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h2``;

export const AddUserBtn = styled.button`
  padding: 7px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    scale: 1.1;
  }
`;

export const ProdImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
