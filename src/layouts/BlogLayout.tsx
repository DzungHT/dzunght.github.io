import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Footer2 from '@/components/Footer2';
import ScrollHandler from '@/components/ScrollHandler';

const BlogLayout: React.FC = () => (
  <>
    <Loader />
    <ScrollHandler />
    <Header />

    <section className="mh-home image-bg home-2-img" id="mh-blog">
      <div className="img-foverlay img-color-overlay">
        <div className="container">
          <div className="row section-separator">
            <div className="mh-page-title text-center col-sm-12">
              <h2>Blog</h2>
              <p>
                It is a long established fact that a reader will be <br />
                distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main>
      <Outlet />
    </main>

    <Footer2 />
  </>
);

export default BlogLayout;
