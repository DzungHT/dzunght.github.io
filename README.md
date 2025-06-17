# 🧑‍💻 Personal Portfolio Website

This is a modern developer portfolio website built with the following tech stack:

## 🚀 Tech Stack
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v6](https://reactrouter.com/)
- [Bootstrap v4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) + [React Bootstrap](https://react-bootstrap.github.io/) for styling
- [GitHub Pages](https://pages.github.com/) for deployment

## 📄 Features
- Personal CV/Resume online
- Blog section written in Markdown (planned)
- Responsive layout with a modern UI
- Deployed via GitHub Pages

## 📁 Project Structure

```
src/
├── components/ # Reusable UI components like Header, Footer
├── layouts/ # Default layout with Header, Footer, and <Outlet />
├── pages/ # Page components (Home, Resume, Blog, BlogDetail)
├── router/ # React Router setup
├── App.tsx # Main app component
└── main.tsx # Entry point
```

## 📚 Setup

```bash
npm install
npm run dev
```

## 📦 Deployment
This app is deployed using GitHub Pages. The output is built via:
```bash
npm run deploy
```
Then push to the correct branch (`gh-pages` or as configured).

## 📘 Writing Blog Posts (Planned)
Blog posts will be written in Markdown using `vite-plugin-md`. Each post will support frontmatter for title, date, and tags.

## 📝 License

- The **source code** of this project is licensed under the [MIT License](./LICENSE).
- The **content** of the website (text, images, media, etc.) is **not covered by the MIT License** and is © 2025 Hoàng Trí Dũng. All rights reserved.
