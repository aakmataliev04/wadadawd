import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex items-center justify-center h-screen">
      <input
        className="bg-gray-400"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Link to={`/${user}`}>View</Link>
    </div>
  )
}

export default Main
