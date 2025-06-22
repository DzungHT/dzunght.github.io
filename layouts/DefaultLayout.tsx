import React from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Footer2 from '@/components/Footer2';
import ScrollHandler from '@/components/ScrollHandler';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Loader />
    <ScrollHandler />
    <Header />

    <main>{children}</main>

    <Footer2 />
  </>
);

export default DefaultLayout;
