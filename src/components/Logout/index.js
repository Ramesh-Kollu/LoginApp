// Write your code here
import './index.css'

const Logout = props => {
  const {logoutButton} = props
  return (
    <div>
      <button type="button" className="button1" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default Logout
