import { Link } from './Sidebar.styled';
import {
  SidebarWrapper,
  SidebarList,
  SidebarListItem,
  SidebarListTitle,
  SidebarItemIcon,
} from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarList>
        <SidebarListTitle>Main</SidebarListTitle>

        <SidebarListItem>
          <Link to="/">
            <SidebarItemIcon src="home.svg" alt="homrpage icon" /> HomePage
          </Link>
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="profile.svg" alt="homrpage icon" /> Profile
        </SidebarListItem>
      </SidebarList>

      <SidebarList>
        <SidebarListTitle>Lists</SidebarListTitle>

        <SidebarListItem>
          <Link to="/users">
            <SidebarItemIcon src="user.svg" alt="homrpage icon" /> Users
          </Link>
        </SidebarListItem>

        <SidebarListItem>
          <Link to="/products">
            <SidebarItemIcon src="product.svg" alt="homrpage icon" /> Products
          </Link>
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="order.svg" alt="Orders icon" /> Orders
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="post2.svg" alt="Posts icon" /> Posts
        </SidebarListItem>
      </SidebarList>

      <SidebarList>
        <SidebarListTitle>General</SidebarListTitle>

        <SidebarListItem>
          <SidebarItemIcon src="element.svg" alt="Elements icon" /> Elements
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="note.svg" alt="Notes icon" /> Notes
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="form.svg" alt="Forms icon" /> Forms
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="calendar.svg" alt="Calendar icon" /> Calendar
        </SidebarListItem>
      </SidebarList>

      <SidebarList>
        <SidebarListTitle>Maintenance</SidebarListTitle>

        <SidebarListItem>
          <SidebarItemIcon src="settings.svg" alt="Settings icon" /> Settings
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="backup.svg" alt="Backups icon" /> Backups
        </SidebarListItem>
      </SidebarList>

      <SidebarList>
        <SidebarListTitle>Analytics</SidebarListTitle>

        <SidebarListItem>
          <SidebarItemIcon src="chart.svg" alt="Charts icon" /> Charts
        </SidebarListItem>

        <SidebarListItem>
          <SidebarItemIcon src="log.svg" alt="Logs icon" /> Logs
        </SidebarListItem>
      </SidebarList>
    </SidebarWrapper>
  );
};

export default Sidebar;
