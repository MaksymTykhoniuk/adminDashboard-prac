import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main, ContentWrapper } from './SharedLayout.styled';

import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <ContentWrapper>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </Main>

      <Footer />
    </Container>
  );
};
