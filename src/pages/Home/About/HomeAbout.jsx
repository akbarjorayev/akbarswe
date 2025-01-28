import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner.jsx'
import { useGetUrlFromDB } from '../../../hooks/useSupabase.js'
import { useLoadFromFirebase } from '../../../hooks/useFirebase.js'
import { icons } from './socialIcons.js'
import './HomeAbout.css'

export default function HomeAbout() {
  const [urlData] = useGetUrlFromDB('me/me', 'dev')
  const [meImgLoading, setMeImgLoading] = useState(true)
  const [socialMedias] = useLoadFromFirebase('dev/socialMedias')

  return (
    <>
      <div className="home_about">
        <div className="home_about_info">
          <div className="d_f_ce home_about_img_con">
            {meImgLoading && <LoadingSpinner />}
            <img
              src={urlData.url}
              alt="Akbar Jorayev"
              className={`home_about_img ${meImgLoading ? 'hidden' : ''}`}
              loading="lazy"
              onLoad={() => setMeImgLoading(false)}
            />
          </div>
          <div className="home_about_info_text d_f_jc_sb list_y">
            <div className="list_y">
              <div className="home_about_name">Akbar Jorayev</div>
              <div className="home_about_title">Software Engineer</div>
            </div>
            <div className="list_x home_about_icons">
              {socialMedias === 'loading' && <LoadingSpinner size={25} />}
              {socialMedias?.socials?.map((socialMedia, i) => (
                <Link
                  key={i}
                  style={{ '--home-about-icon-delay': `${i * 0.1}s` }}
                  to={socialMedia.link}
                  aria-label={socialMedia.name}
                  className="icon d_f_ai_ce"
                >
                  {icons[socialMedia.name]
                    ? React.cloneElement(icons[socialMedia.name])
                    : `${socialMedia.name}`}
                </Link>
              ))}
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
