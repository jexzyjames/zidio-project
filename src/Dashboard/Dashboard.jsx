import React from 'react'
import './dashboard.css'
function Dashboard({formData}) {
  return (
    <div>
      <h1>Welcome <b>{formData.username}</b></h1>
      <p>This is your Dashboard</p>
      
    </div>
  )
}

export default Dashboard
