// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  console.log(isLoggedIn)
  const message = isLoggedIn ? 'Please Login' : 'Welcome USer'
  return <p className="paragraph">{message}</p>
}

export default Message
