import { useEffect } from 'react'
import Loading from '../../Loading/Loading'
import BlogListItem from './BlogListItem/BlogListItem'
import BlogComingSoon from '../BlogComingSoon/BlogComingSoon'
import { useLoadFromFirebase } from '../../../hooks/useFirebase'
import './BlogList.css'

export default function BlogList() {
  const [blogs, setBlogs] = useLoadFromFirebase('blog', true)

  useEffect(() => {
    if (blogs === 'loading') return

    if (blogs?.length > 0) {
      const sortedBlogs = [...blogs].sort((a, b) => b.published - a.published)
      setBlogs(sortedBlogs)
    }
  }, [blogs?.length])

  return (
    <>
      <div className="container container_content">
        <div className="blog_area">
          {blogs === 'loading' && (
            <div className="blog_list_loading d_f_ce">
              <Loading />
            </div>
          )}
          {blogs !== 'loading' &&
            blogs.map((blog, i) => {
              return (
                <BlogListItem
                  key={i}
                  title={blog.title}
                  published={blog.published}
                />
              )
            })}
          {blogs !== 'loading' && blogs?.length === 0 && <BlogComingSoon />}
        </div>
      </div>
    </>
  )
}
