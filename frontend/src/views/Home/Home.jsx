import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { display } from '../../features/projSlice';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, projects } = useSelector((state) => state.proj);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(display());
  }, [dispatch]);

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>


    <section className='content'>
      <h3>Projects</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : projects ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </section>
    </>
  );
}

export default Dashboard;