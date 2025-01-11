import { useContext, useRef } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input/Input'
import { BlogAddContext } from '../BlogAddContext'
import { blogAddInsertIntoArray } from '../utils/blogAddInsertIntoArray'
import { blogAddDelete } from '../utils/blogAddDelete'
import deleteIcon from '../../../../media/icons/delete.svg'

export default function BlogAddPhoto({ i }) {
  const item = useRef()
  const { photos, setPhotos } = useContext(BlogAddContext)

  return (
    <>
      <div className="list_y" ref={item}>
        <img className="blog_photo" src={photos[i].data} alt="" />
        <Button
          className="blog_add_delete_btn"
          onClick={() =>
            setPhotos(
              blogAddDelete(photos, i, {
                data: '',
                file: null,
                subtitle: '',
              })
            )
          }
        >
          <img className="icon" src={deleteIcon} alt="delete" />
        </Button>
        <Input
          className="blog_add_photo_input"
          placeholder="Subtitle for photo"
          value={photos[i].subtitle}
          onChange={(e) =>
            setPhotos(
              blogAddInsertIntoArray(photos, i, {
                ...photos[i],
                subtitle: e.target.value,
              })
            )
          }
        />
      </div>
    </>
  )
}
