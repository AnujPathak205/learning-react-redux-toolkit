import React from 'react'
import UserProvider from './contexts/UserProvider'
import Profile from './Profile'

function Navbar() {
  return (
    <div>
      <UserProvider>
        <Profile />
      </UserProvider>
    </div>
  )
}

export default Navbar
