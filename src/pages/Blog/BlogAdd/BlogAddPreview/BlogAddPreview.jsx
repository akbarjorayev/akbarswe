import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '../../../../components/Button/Button'
import { BlogAddContext } from '../BlogAddContext'
import { publishBlog } from '../../../../module/blog/publish'
import { formatDate } from '../../../../scripts/format/date'
import './BlogAddPreview.css'

export default function BlogAddPreview() {
  const { title, texts, photos } = useContext(BlogAddContext)

  async function publish() {
    await publishBlog(title, texts, photos)
  }

  return (
    <>
      <h1 className="blog_add_title_input">{title}</h1>
      <div className="blog_add_preview_published">
        {formatDate(new Date().getTime())}
      </div>
      <hr className="blog_add_preview_hr" />
      {texts.map((text, i) => {
        const photo = photos[i]
        const hasChild = (!text.deleted && text.value) || photo?.data
        if (!hasChild) return null

        return (
          <div key={i} className="list_y blog_add_preview_item">
            {!text.deleted && text.value && (
              <ReactMarkdown>{text.value}</ReactMarkdown>
            )}
            {photo?.data && (
              <div className="list_y">
                <img
                  className="blog_photo"
                  src={photo.data}
                  alt={photo.subtitle}
                />
                <span style={{ textAlign: 'center' }}>{photo.subtitle}</span>
              </div>
            )}
          </div>
        )
      })}
      <Button onClick={publish}>Publish</Button>
    </>
  )
}
