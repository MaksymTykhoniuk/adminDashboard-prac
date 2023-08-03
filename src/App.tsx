import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import './styles/global.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const Users = lazy(() => import('./pages/Users/Users'));
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'));
const SingleUser = lazy(() => import('./pages/SingleUser/SingleUser'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Route>
    </Routes>
  );
}

export default App;
