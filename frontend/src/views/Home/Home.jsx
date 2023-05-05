import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { display } from '../../features/projSlice'
import './Home.css'

function Dashboard() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, projects } = useSelector((state) => state.proj)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(display())
  }, [dispatch])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>

      <section className='content'>
        <h3>Projects</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : projects && projects.length > 0 ? (
          <div className='project-grid'>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className='project-tile'>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
          </div>
        ) : (
          <p>No projects found.</p>
        )}
      </section>
    </>
  )
}

export default Dashboard
