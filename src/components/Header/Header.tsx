import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  LogoText,
  ControlsWrapper,
  ControlsList,
  ControlItem,
  ControlIcon,
  UserWrapper,
  UserAvatar,
  UserName,
  SettingIcon,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <Logo src="logo.svg" alt="web logo" />
        <LogoText>adminBoard</LogoText>
      </LogoWrapper>

      <ControlsWrapper>
        <ControlsList>
          <ControlItem>
            <ControlIcon>
              <img src="search.svg" alt="search icon" />
            </ControlIcon>
          </ControlItem>

          <ControlItem>
            <ControlIcon>
              <img src="app.svg" alt="app icon " />
            </ControlIcon>
          </ControlItem>
          <ControlItem>
            <ControlIcon>
              <img src="expand.svg" alt="expand icon" />
            </ControlIcon>
          </ControlItem>
          <ControlItem>
            <ControlIcon>
              <img src="notifications.svg" alt="notification icon" />
            </ControlIcon>
          </ControlItem>
        </ControlsList>

        <UserWrapper>
          <UserAvatar src="noavatar.png" alt="user avatar" />
          <UserName>Jane</UserName>
        </UserWrapper>

        <SettingIcon>
          <img src="setting.svg" alt="setting icon" />
        </SettingIcon>
      </ControlsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
