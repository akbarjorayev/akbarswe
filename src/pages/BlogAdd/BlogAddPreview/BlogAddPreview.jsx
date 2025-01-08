import { useContext } from 'react'
import { BlogAddContext } from '../BlogAddContext'
import Button from '../../../components/Button/Button'
import { publishBlog } from '../../../module/blog/publish'

export default function BlogAddPreview() {
  const { title, texts, photos } = useContext(BlogAddContext)

  async function publish() {
    await publishBlog(title, texts, photos)
  }

  return (
    <>
      <h1 className="blog_add_title_input">{title}</h1>
      {texts.map((text, i) => {
        const photo = photos[i]
        const hasChild = (!text.deleted && text.value) || photo?.data
        if (!hasChild) return null

        return (
          <div key={i} className="list_y">
            {!text.deleted && text.value && <pre>{text.value}</pre>}
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
