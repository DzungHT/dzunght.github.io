// src/router/index.tsx
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}
