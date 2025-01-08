import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
      <div className="container container_header">
        <header className="header d_f_ai_ce">
          <div className="header_content d_f_jc_sb">
            <div className="logo">
              <Link to="/">Akbar's Blog</Link>
            </div>
            <div className="header_links list_x">
              <Link to="/cv">CV</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
