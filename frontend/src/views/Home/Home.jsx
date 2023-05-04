import { useSelector, } from 'react-redux'

function Dashboard() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>

      <section className='content'>
          <h3>Projects</h3>
      </section>
    </>
  )
}

export default Dashboard