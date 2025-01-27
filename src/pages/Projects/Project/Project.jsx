import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import './Project.css'

export default function Project({ project }) {
  return (
    <>
      <div className="project_area d_f_ce list_y">
        <img
          src={project?.img.link}
          alt={project?.img.alt}
          className="project_img"
          loading="lazy"
        />
        <b className="project_name">{project?.name}</b>
        <Link to={project?.link} className="project_btn">
          <Button>Explore</Button>
        </Link>
      </div>
    </>
  )
}
