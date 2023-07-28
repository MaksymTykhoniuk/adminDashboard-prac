import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <div>
        <Sidebar />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </Container>
  );
};
