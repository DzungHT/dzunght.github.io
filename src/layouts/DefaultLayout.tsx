import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Footer2 from '@/components/Footer2';

const DefaultLayout: React.FC = () => (
  <div>
    <Loader />
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer2 />
  </div>
);

export default DefaultLayout;
