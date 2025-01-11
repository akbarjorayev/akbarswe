import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Blog.css'

const BlogList = React.lazy(() => import('./BlogList/BlogList'))
const BlogAdd = React.lazy(() => import('./BlogAdd/BlogAdd'))
const BlogShow = React.lazy(() => import('./BlogShow/BlogShow'))

export default function Blog() {
  return (
    <>
      <div className="container container_content">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="add" element={<BlogAdd />} />
          <Route path="b/*" element={<BlogShow />} />
        </Routes>
      </div>
    </>
  )
}
