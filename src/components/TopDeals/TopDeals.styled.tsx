import styled from '@emotion/styled';

export const TopDealWrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;
`;

export const UserText = styled.p`
  font-size: 14px;
  font-weight: 500;

  &.user_email {
    font-size: 12px;
  }
`;

export const Amount = styled.p`
  font-weight: 500;
`;
