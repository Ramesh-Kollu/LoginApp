// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  loginButton = () =>
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))

  logoutButton = () =>
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))

  render() {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)
    return (
      <div className="container1">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn && <Login loginButton={this.loginButton} />}
        {!isLoggedIn && <Logout logoutButton={this.logoutButton} />}
      </div>
    )
  }
}

export default Home
