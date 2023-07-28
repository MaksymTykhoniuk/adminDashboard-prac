import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  width: 250px;
  padding: 5px 20px;
  border-right: 2px solid #384256;
`;

export const Link = styled(NavLink)`
  display: block;
  gap: 4px;
  color: white;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
