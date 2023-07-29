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
  list-style: none;

  &:last-of-type {
    margin-bottom: 18px;
  }
`;

export const SidebarListItem = styled.li`
  display: flex;
  margin-bottom: 5px;
  margin-left: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 30px;

  &:hover {
    background-color: #384256;
  }
`;

export const SidebarListTitle = styled.p`
  display: block;
  margin-bottom: 16px;

  text-transform: uppercase;
  font-size: 12px;
  color: #ddd;
  opacity: 0.7;
`;

export const SidebarItemIcon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  color: white;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
