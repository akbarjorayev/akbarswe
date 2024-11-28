import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './pages/Loading/Loading'
import './style/App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const BlogAdd = React.lazy(() => import('./pages/BlogAdd/BlogAdd'))
const Aboutme = React.lazy(() => import('./pages/Aboutme/Aboutme'))

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/add" element={<BlogAdd />} />
            <Route path="/aboutme" element={<Aboutme />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
