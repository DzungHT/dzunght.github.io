# 🧑‍💻 Personal Portfolio Website

This is a modern developer portfolio website built with the following tech stack:

## 🚀 Tech Stack
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router v6](https://reactrouter.com/)
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


---
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
