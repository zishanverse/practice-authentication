import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {

  logIn = async() => {
    const user = {username: 'rahul', password: 'rahul@2021'}
    const option = {method: 'POST', body: JSON.stringify(user)}
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    const {history} = this.props
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    history.replace('/')  
    }
    
  }

  render() {
    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.logIn}>
          Login with sample Creds
        </button>
      </div>
    )
  }
}

export default Login
