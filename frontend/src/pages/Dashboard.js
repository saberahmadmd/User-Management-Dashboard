import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList'

const Dashboard = () => {
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(0)

  const handleAddUser = () => {
    navigate('/add')
  }

  const handleEditUser = (user) => {
    navigate(`/edit/${user.id}`)
  }

  const handleRefresh = () => {
    setRefresh(prev => prev + 1)
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Management</h2>
      <div className="dashboard-actions">
        <button className="btn btn-secondary" onClick={handleRefresh}>Refresh</button>
        <button className="btn btn-primary" onClick={handleAddUser}>Add New User</button>
      </div>
      <UserList onEdit={handleEditUser} refresh={refresh} />
    </div>
  )
}

export default Dashboard