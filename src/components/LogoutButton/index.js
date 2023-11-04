import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logOut}>
      logout
    </button>
  )
}

export default withRouter(LogoutButton)
