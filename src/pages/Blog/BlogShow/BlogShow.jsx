import { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import Loading from '../../Loading/Loading'
import { useLoadFromFirebase } from '../../../hooks/useFirebase'
import { formatDate } from '../../../scripts/format/date'
import './BlogShow.css'

export default function BlogShow() {
  const url = useRef(window.location.pathname.split('b/')[1]).current
  const [blogData] = useLoadFromFirebase(`blog/${url}`)
  const [blog] = useLoadFromFirebase(`blog/${url}/blog/blog`)

  if (blogData === 'loading' || blog === 'loading') return <Loading />

  return (
    <>
      <div className="container container_content">
        <div className="blog_area list_y blog_show_area">
          <h1 className="blog_show_title">{blogData?.title}</h1>
          <div className="blog_show_published">
            {formatDate(blogData?.published)}
          </div>
          <hr />
          {blog?.blog.map((blog, i) => {
            if (blog?.type === 'text') {
              return <ReactMarkdown key={i}>{blog?.value}</ReactMarkdown>
            }

            if (blog?.type === 'photo') {
              return (
                <div key={i} className="list_y">
                  <img
                    className="blog_photo"
                    src={blog?.url}
                    alt={blog?.subtitle}
                  />
                  <span style={{ textAlign: 'center' }}>{blog?.subtitle}</span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}
