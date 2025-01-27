import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import { socials } from './socials'
import { useGetUrlFromDB } from '../../../hooks/useSupabase.js'
import './HomeAbout.css'

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
            loading="lazy"
          />
          <div className="home_about_info_text d_f_jc_sb list_y">
            <div className="list_y">
              <div className="home_about_name">Akbar Jorayev</div>
              <div className="home_about_title">Software Engineer</div>
            </div>
            <div className="list_x home_about_icons">
              {socials.map((social, _) => {
                return (
                  <Link key={_} to={social.link} aria-label={social.alt}>
                    {React.cloneElement(social.icon, {
                      className: 'icon',
                    })}
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
          <Link to="/about-me">
            <Button className="home_about_about_btn">About me</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
