import React, { useState, useEffect } from 'react'

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    street: '', city: '', zipcode: '', lat: '', lng: ''
  })
  const [error, setError] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (user) setFormData(user)
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error[name]) setError(prev => ({ ...prev, [name]: '' }))
  }

  const validForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    setError(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validForm()) return
    setSubmitting(true)
    try { await onSubmit(formData) }
    catch (err) { console.error('Form error:', err) }
    finally { setSubmitting(false) }
  }

  return (
    <div className="form-container">
      <h2 className="form-title">{user ? 'Edit User' : 'Add New User'}</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        {['name', 'email', 'phone', 'company', 'street', 'city', 'zipcode', 'lat', 'lng'].map(field => (
          <div className="form-group" key={field}>
            <label className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
              {(field === 'name' || field === 'email') && ' *'}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              className="form-input"
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
            />
            {error[field] && <div className="error">{error[field]}</div>}
          </div>
        ))}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Saving...' : (user ? 'Update User' : 'Add User')}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={submitting}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
export default UserForm