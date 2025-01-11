import { useContext, useRef } from 'react'
import Textarea from '../../../../components/Input/Textarea/Textarea'
import Button from '../../../../components/Button/Button'
import { BlogAddContext } from '../BlogAddContext'
import { blogAddDelete } from '../utils/blogAddDelete'
import { blogAddInsertIntoArray } from '../utils/blogAddInsertIntoArray'
import { ReactComponent as DeleteIcon } from '../../../../media/icons/delete.svg'

export default function BloadAddTextarea({ i }) {
  const item = useRef()
  const { texts, setTexts } = useContext(BlogAddContext)

  return (
    <>
      <div className="list_x" ref={item}>
        <Textarea
          placeholder="Blog here"
          value={texts[i].value}
          onChange={(e) =>
            setTexts(
              blogAddInsertIntoArray(texts, i, {
                value: e.target.value,
                deleted: false,
              })
            )
          }
        />
        <Button
          className="blog_add_delete_btn"
          onClick={() =>
            setTexts(
              blogAddDelete(texts, i, {
                value: '',
                deleted: true,
              })
            )
          }
        >
          <DeleteIcon className="icon" />
        </Button>
      </div>
    </>
  )
}
