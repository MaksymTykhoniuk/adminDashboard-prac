import { Link } from './Sidebar.styled';
import { SidebarWrapper } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      Sidebar
      <nav>
        <Link to="/" end>
          home
        </Link>
        <Link to="/products">products</Link>
        <Link to="/users">users</Link>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
