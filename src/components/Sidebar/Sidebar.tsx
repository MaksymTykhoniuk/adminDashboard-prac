import {
  SidebarWrapper,
  SidebarList,
  SidebarListItem,
  SidebarListTitle,
  SidebarItemIcon,
  ItemLink,
  DisabledBtn,
} from './Sidebar.styled';

import { menu } from '../../../data.ts';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {menu.map(el => (
        <SidebarList key={el.id}>
          <SidebarListTitle>
            {el.title}
            {el.listItems.map(item => (
              <SidebarListItem key={item.id}>
                {item.url === '*' ? (
                  <DisabledBtn disabled>
                    <SidebarItemIcon src={item.icon} />
                    {item.title}
                  </DisabledBtn>
                ) : (
                  <ItemLink to={item.url}>
                    <SidebarItemIcon src={item.icon} />
                    {item.title}
                  </ItemLink>
                )}
              </SidebarListItem>
            ))}
          </SidebarListTitle>
        </SidebarList>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
