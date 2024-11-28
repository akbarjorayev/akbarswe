import { useRef } from 'react'
import Textarea from '../../../components/Input/Textarea/Textarea'
import Button from '../../../components/Button/Button'
import deleteIcon from '../../../media/icons/delete.svg'

export default function BloadAddTextarea() {
  const item = useRef()

  return (
    <>
      <div className="list_x" ref={item}>
        <Textarea placeholder="Blog here" />
        <Button
          className="blog_add_delete_btn"
          onClick={() => item.current.remove()}
        >
          <img className="icon" src={deleteIcon} alt="delete" />
        </Button>
      </div>
    </>
  )
}
