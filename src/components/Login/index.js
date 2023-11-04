import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {jwt: ''}

  componentDidMount() {
    this.geToken()
  }

  geToken = async () => {
    const user = {username: 'rahul', password: 'rahul@2021'}
    const option = {method: 'POST', body: JSON.stringify(user)}
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    this.setState({jwt: data.jwt_token})
  }

  logIn = () => {
    const {jwt} = this.state
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {expires: 30})
    history.replace('/')
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
