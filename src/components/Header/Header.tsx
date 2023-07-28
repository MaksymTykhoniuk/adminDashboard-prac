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
      <LogoWrapper>
        <Logo src="logo.svg" alt="web logo" />
        <LogoText>adminBoard</LogoText>
      </LogoWrapper>

      <ControlsWrapper>
        <ControlsList>
          <ControlItem>
            <ControlIcon href="">
              <img src="search.svg" alt="" />
            </ControlIcon>
          </ControlItem>

          <ControlItem>
            <ControlIcon href="">
              <img src="app.svg" alt="" />
            </ControlIcon>
          </ControlItem>
          <ControlItem>
            <ControlIcon href="">
              <img src="expand.svg" alt="" />
            </ControlIcon>
          </ControlItem>
          <ControlItem>
            <ControlIcon href="">
              <img src="search.svg" alt="" />
            </ControlIcon>
          </ControlItem>
        </ControlsList>

        <UserWrapper>
          <UserAvatar src="noavatar.png" alt="user avatar" />
          <UserName>Jane</UserName>
        </UserWrapper>

        <SettingIcon href="">
          <img src="setting.svg" alt="" />
        </SettingIcon>
      </ControlsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
