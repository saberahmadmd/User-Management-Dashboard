import { useNavigate } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { usersAPI } from '../api/axios'


const AddUser = () => {
  const navigate = useNavigate()

  const handleSubmit = async (userData) => {
    try {
      await usersAPI.create(userData);
      navigate('/', { state: { message: 'User added successfully!' } })
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.err) {
        alert(`Error: ${error.response.data.err}`)
      } else {
        alert('Failed to add user. Please try again.')
      }
      console.log('Error adding user:', error)
    }
  }

  const hadleCancel = () => {
    navigate("/")
  }
  return (
    <div>
      <h2>Add New User</h2>
      <UserForm onSubmit={handleSubmit} onCancel={hadleCancel} />
    </div>
  )
}

export default AddUser;
