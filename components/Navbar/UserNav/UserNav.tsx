import React from 'react'
import Login from './Login'

const UserNav = () => {
  return (
    <div className="dropdown dropdown-end">
      <Login />
      {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul> */}
    </div>
  )
}

export default UserNav
