// src/router/index.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import BlogLayout from '@/layouts/BlogLayout';
import BlogList from '@/pages/BlogList';
import BlogDetail from '@/pages/BlogDetail';
import DefaultLayout from '@/layouts/DefaultLayout';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<BlogLayout />}>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}
