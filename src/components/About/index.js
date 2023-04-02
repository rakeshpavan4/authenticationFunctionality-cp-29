// Write your JS code here
import Cookie from 'js-cookie'
import './index.css'
import Header from '../Header'

const About = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="home">
      <Header />
      <h1>About Route</h1>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default About
