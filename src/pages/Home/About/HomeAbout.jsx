import Button from '../../../components/Button/Button'
import './HomeAbout.css'
import { socials } from './socials'
import { useGetUrlFromDB } from '../../../hooks/useSupabase.js'
import { Link } from 'react-router-dom'

export default function HomeAbout() {
  const [urlData] = useGetUrlFromDB('me/me', 'dev')

  return (
    <>
      <div className="home_about">
        <div className="home_about_info">
          <img
            src={urlData.url}
            alt="Akbar Jorayev"
            className="home_about_img"
          />
          <div className="home_about_info_text d_f_jc_sb list_y">
            <div className="list_y">
              <div className="home_about_name">Akbar Jorayev</div>
              <div className="home_about_title">Software Engineer</div>
            </div>
            <div className="list_x home_about_icons">
              {socials.map((social, _) => {
                return (
                  <Link key={_} to={social.link}>
                    <img src={social.icon} alt={social.alt} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <p className="home_about_desc">
          Hi there! I'm <b>Akbar Jorayev</b>, an 18-year-old Software Engineer
          from Uzbekistan.
        </p>
        <div className="list_x">
          <Link to="/aboutme">
            <Button className="home_about_about_btn">About me</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
