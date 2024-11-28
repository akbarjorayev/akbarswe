import { useRef, useState } from 'react'
import Input from '../../components/Input/Input/Input'
import Textarea from '../../components/Input/Textarea/Textarea'
import Button from '../../components/Button/Button'
import BlogAddPhoto from './BlogAddPhoto/BlogAddPhoto'
import BloadAddTextarea from './BloadAddTextarea/BloadAddTextarea'
import { getPhoto } from '../../scripts/photo/getPhoto'
import { compressPhoto } from '../../scripts/photo/compressor'
import './BlogAdd.css'

export default function BlogAdd() {
  const photo_input = useRef()
  const [photos, setPhotos] = useState([])

  async function handlePhoto(e) {
    let photo = await getPhoto(e.target.files[0])
    photo = await compressPhoto(photo)
    setPhotos(photos.concat(photo))
    e.target.value = ''
  }

  return (
    <>
      <div className="container container_content">
        <div className="blog_area list_y">
          <Input className="blog_add_title_input" placeholder="Title" />
          <Textarea placeholder="Blog here" />
          {photos.map((photo, i) => {
            return (
              <div className="list_y" key={i}>
                <BlogAddPhoto imgSrc={photo} />
                <BloadAddTextarea />
              </div>
            )
          })}
          <Button onClick={() => photo_input.current.click()}>
            <span>New Photo</span>
            <input
              ref={photo_input}
              className="blog_add_file_input"
              type="file"
              accept="image/*"
              onChange={handlePhoto}
            />
          </Button>
          <Button>Publish</Button>
        </div>
      </div>
    </>
  )
}
