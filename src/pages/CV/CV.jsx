import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Button from '../../components/Button/Button'
import { useLoadFromFirebase } from '../../hooks/useFirebase'
import './CV.css'

export default function CV() {
  const [cv_link] = useLoadFromFirebase('dev/cv')

  useEffect(() => {
    if (cv_link?.url) window.location.href = cv_link.url
  }, [cv_link])

  if (cv_link === 'loading') return <Loading />

  return (
    <>
      <div className="container container_content d_f_ce">
        <h1 className="cv_text">
          If you weren't automatically redirected, please click the button
          below.
        </h1>
        <Link className="cv_btn" to={cv_link.url} target="_self">
          <Button>CV</Button>
        </Link>
      </div>
    </>
  )
}
