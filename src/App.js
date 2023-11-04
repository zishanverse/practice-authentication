import {Redirect, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectRoute from './components/ProtectedRoute'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectRoute exact path="/" component={Home} />
    <ProtectRoute exact path="/about" component={About} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)
export default App
