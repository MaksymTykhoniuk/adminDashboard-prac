import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
  width: 26px;
  height: 26px;
`;

export const LogoText = styled.span``;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ControlsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 16px;
`;

export const ControlItem = styled.li``;

export const ControlIcon = styled.a``;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  margin-left: 36px;
`;

export const UserName = styled.p``;

export const SettingIcon = styled.a`
  margin-left: 36px;
`;
