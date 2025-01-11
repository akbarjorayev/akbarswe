import { Link } from 'react-router-dom'
import { formatDate } from '../../../../scripts/format/date'
import { slug } from '../../../../scripts/utils/slug'
import './BlogListItem.css'

export default function BlogListItem({ title, published }) {
  return (
    <>
      <Link className="blog_list_item" to={`b/${slug(title)}`}>
        <h1>{title}</h1>
        <div className="blog_list_item_published">{formatDate(published)}</div>
      </Link>
    </>
  )
}
