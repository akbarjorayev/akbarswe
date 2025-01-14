import { useState } from 'react'
import Project from './Project/Project'
import Loading from '../Loading/Loading'
import { useLoadFromFirebase } from '../../hooks/useFirebase'
import { isEven } from '../../scripts/utils/isEven'
import './Projects.css'

export default function Projects() {
  const [projects] = useLoadFromFirebase('dev/projects')
  const [visibleIndex, setVisibleIndex] = useState(0)

  function handleScroll() {
    const container = document.querySelector('.projects_list')
    const elements = container.querySelectorAll('.project_area')

    let index
    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect()
      const correctPos = rect.top >= 0 && rect.top <= container.clientHeight
      if (correctPos) index = i
    })
    setVisibleIndex(index)
  }

  if (projects === 'loading') return <Loading />

  return (
    <>
      <div
        className="container container_content projects_list"
        onScroll={handleScroll}
      >
        <div
          className="projects_bubbles"
          style={{
            '--project-bubble-color': projects?.projects[visibleIndex]?.color,
            '--project-bubble-pos': isEven(visibleIndex) ? '40%' : '60%',
          }}
        ></div>
        {projects?.projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </>
  )
}
