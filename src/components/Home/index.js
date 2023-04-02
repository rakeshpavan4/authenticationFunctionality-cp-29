// Write your JS code here
import Cookie from 'js-cookie'
import './index.css'
import Header from '../Header'

const Home = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="home">
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
