// Write your code here
// import {Component} from 'react'
import './index.css'

const Login = props => {
  const {loginButton} = props

  return (
    <div>
      <button type="button" className="button" onClick={loginButton}>
        Login
      </button>
    </div>
  )
}

// class Login extends Component {
//   render() {
//     const {loginButton} = this.props
//     return (
//       <div>
//         <button type="button" onClick={loginButton}>
//           Please Login
//         </button>
//       </div>
//     )
//   }
// }
export default Login
