import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  width: 250px;
  padding: 5px 20px;
  border-right: 2px solid #384256;
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  list-style: none;
`;

export const SidebarListItem = styled.li``;

export const SidebarListTitle = styled.p`
  color: #ddd;
  opacity: 0.7;
  font-size: 12px;
  font-weight: 200;
  text-transform: uppercase;
`;

export const SidebarItemIcon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 500;

  &:hover {
    background-color: #384256;
  }

  &.active {
    font-weight: bold;
    color: #fff;
    filter: drop-shadow(0px 0px 10px white);

    &:hover {
      background-color: #384256;
      filter: none;
    }
  }
`;
