import { useContext, useRef } from 'react'
import Button from '../../../components/Button/Button'
import { BlogAddContext } from '../BlogAddContext'

export default function BlogAddChmod() {
  const chmodBtns = useRef(['edit', 'view']).current
  const { chmodBtnStatus, setChmodBtnStatus } = useContext(BlogAddContext)

  function chmod(mode) {
    if (chmodBtnStatus === mode) return
    setChmodBtnStatus(mode)
  }

  return (
    <>
      <div className="blog_add_chmod_btns list_x d_f_ce">
        {chmodBtns.map((chmodBtn, i) => (
          <Button
            key={i}
            className={`${chmodBtnStatus === chmodBtn ? 'active' : ''}`}
            onClick={() => chmod(chmodBtn)}
          >
            {chmodBtn}
          </Button>
        ))}
      </div>
    </>
  )
}
