import {
  TopDealWrapper,
  Title,
  List,
  ListItem,
  UserSection,
  UserAvatar,
  UserInfo,
  UserText,
  Amount,
} from './TopDeals.styled';
import { topDealUsers } from '../../../data';

const TopDeals = () => {
  return (
    <TopDealWrapper>
      <Title>Top Deals</Title>
      <List>
        {topDealUsers.map(user => (
          <ListItem key={user.id}>
            <UserSection>
              <UserAvatar src={user.img} alt="user avatar" />
              <UserInfo>
                <UserText>{user.username}</UserText>
                <UserText className="user_email">{user.email}</UserText>
              </UserInfo>
            </UserSection>
            <Amount> $ {user.amount}</Amount>
          </ListItem>
        ))}
      </List>
    </TopDealWrapper>
  );
};

export default TopDeals;
