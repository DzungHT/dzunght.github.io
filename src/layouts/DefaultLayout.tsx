import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const DefaultLayout: React.FC = () => (
  <div className="bg-base02">
    <Loader />
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default DefaultLayout;