import { useState } from 'react'
import BlogSecure from './BlogSecure/BlogSecure'
import BlogAddChmod from './BlogAddChmod/BlogAddChmod'
import BlogAddEdit from './BlogAddEdit/BlogAddEdit'
import BlogAddPreview from './BlogAddPreview/BlogAddPreview'
import { BlogAddContext } from './BlogAddContext'
import './BlogAdd.css'

export default function BlogAdd() {
  const [secure, setSecure] = useState(false)
  const [title, setTitle] = useState('')
  const [texts, setTexts] = useState([{ value: '', deleted: false }])
  const [photos, setPhotos] = useState([])
  const [blog, setBlog] = useState({})
  const [chmodBtnStatus, setChmodBtnStatus] = useState('edit')

  return (
    <>
      <BlogAddContext.Provider
        value={{
          title,
          setTitle,
          texts,
          setTexts,
          photos,
          setPhotos,
          chmodBtnStatus,
          setChmodBtnStatus,
          blog,
          setBlog,
        }}
      >
        <div className="container container_content">
          {!secure && <BlogSecure setSecure={setSecure} />}
          {secure && (
            <>
              <BlogAddChmod />
              <div className="blog_area list_y">
                {chmodBtnStatus === 'edit' && <BlogAddEdit />}
                {chmodBtnStatus === 'view' && <BlogAddPreview />}
              </div>
            </>
          )}
        </div>
      </BlogAddContext.Provider>
    </>
  )
}
