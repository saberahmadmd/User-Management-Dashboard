import { useState, useEffect } from 'react'
import { usersAPI } from '../api/axios'

const UserList = ({ onEdit, refresh }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [refresh])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await usersAPI.getAll()
      setUsers(response.data.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await usersAPI.delete(id)
        fetchUsers()
      } catch (err) {
        setError('Failed to delete user')
      }
    }
  }

  if (loading) return <div className="loading">Loading users....</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="userlist-container">
      <h3 className="userlist-title">Users List</h3>
      {users.length === 0 ? (
        <p className="empty-list">No users found. Add some users to get started.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone || '-'}</td>
                <td>{user.company || '-'}</td>
                <td>
                  <button
                    className="btn btn-edit"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UserList;