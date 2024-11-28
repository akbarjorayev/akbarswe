import { useRef } from 'react'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input/Input'

export default function BlogAddPhoto({ imgSrc }) {
  const item = useRef()

  return (
    <>
      <div className="list_y" ref={item}>
        <img className="blog_photo" src={imgSrc} alt="" />
        <Button onClick={() => item.current.remove()}>Delete</Button>
        <Input
          className="blog_add_photo_input"
          placeholder="Subtitle for photo"
        />
      </div>
    </>
  )
}
