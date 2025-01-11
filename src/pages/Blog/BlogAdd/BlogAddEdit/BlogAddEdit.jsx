import { useContext, useRef } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input/Input'
import Textarea from '../../../../components/Input/Textarea/Textarea'
import BlogAddPhoto from '../BlogAddPhoto/BlogAddPhoto'
import BloadAddTextarea from '../BloadAddTextarea/BloadAddTextarea'
import { BlogAddContext } from '../BlogAddContext'
import { getPhoto } from '../../../../scripts/photo/getPhoto'
import { compressPhoto } from '../../../../scripts/photo/compressor'
import { blogAddInsertIntoArray } from '../utils/blogAddInsertIntoArray'

export default function BlogAddEdit() {
  const photo_input = useRef()
  const { title, setTitle, photos, setPhotos, texts, setTexts } =
    useContext(BlogAddContext)

  async function handlePhoto(e) {
    const photo_data = await getPhoto(e.target.files[0])
    const photo_file = await compressPhoto(photo_data)

    setPhotos(
      photos.concat([{ file: photo_file, data: photo_data, subtitle: '' }])
    )
    setTexts([...texts, { value: '', deleted: false }])

    e.target.value = ''
  }

  return (
    <>
      <Input
        className="blog_add_title_input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Blog here"
        value={texts[0].value}
        onChange={(e) =>
          setTexts(
            blogAddInsertIntoArray(texts, 0, {
              value: e.target.value,
              deleted: false,
            })
          )
        }
      />
      {photos.map((_, i) => {
        return (
          <div className="list_y" key={i}>
            {photos[i].data && <BlogAddPhoto i={i} />}
            {!texts[i + 1].deleted && <BloadAddTextarea i={i + 1} />}
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
    </>
  )
}
