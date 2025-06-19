import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Footer2 from '@/components/Footer2';
import ScrollHandler from '@/components/ScrollHandler';

const DefaultLayout: React.FC = () => (
  <>
    <Loader />
    <ScrollHandler />
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer2 />
  </>
);

export default DefaultLayout;
