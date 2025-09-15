import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usersAPI } from '../api/axios'
import UserForm from '../components/UserForm'

const EditUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await usersAPI.getById(id)
        setUser(response.data.data)
        setError('')
      } catch (error) {
        setError("Failed to fetch user Details")
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])


  const handleSubmit = async (userData) => {
    try {
      await usersAPI.update(id, userData);
      navigate('/', { state: { message: 'User updated successfully!' } })
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Error: ${error.response.data.error}`)
      }
      else {
        alert('Failed to update user. Please try again.')
      }
      console.error('Error updating user:', error)
    }
  }

  const handleCancel = () => {
    navigate('/')
  }

  if (loading) return <div>Loading user details.....</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}

export default EditUser;
