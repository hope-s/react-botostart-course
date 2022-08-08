import React from 'react';
import './styles/App.css';
import Home from './views/pages/Home';
import Post from './views/pages/Post';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Author from './views/pages/Author';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:slug' element={<Post />} />
          <Route path='/author/:slug' element={<Author />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
