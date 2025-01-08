import React, { useRef } from 'react'
import './Blog.css'

const BlogAdd = React.lazy(() => import('../BlogAdd/BlogAdd'))

export default function Blog() {
  const url = useRef(window.location.pathname.split('blog/')[1]).current

  return (
    <>
      <div className="container container_content">
        {url === 'add' && <BlogAdd />}
        {url !== 'add' && (
          <div className="blog_coming_soon_title">
            <div className="blog_title">Blog</div>
            <div className="blog_coming_soon">Coming soon</div>
          </div>
        )}
      </div>
    </>
  )
}
