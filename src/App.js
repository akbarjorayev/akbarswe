import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './pages/Loading/Loading'
import './style/App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const CV = React.lazy(() => import('./pages/CV/CV'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Aboutme = React.lazy(() => import('./pages/Aboutme/Aboutme'))
const Projects = React.lazy(() => import('./pages/Projects/Projects'))

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/about-me" element={<Aboutme />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
