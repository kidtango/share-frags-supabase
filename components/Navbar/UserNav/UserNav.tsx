import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'

import Auth from '@components/Auth'
import Login from './Login'
import { User } from '@supabase/supabase-js'

const UserNav = () => {
  const { user } = Auth.useUser()
  const [currentUser, setCurrentUser] = useState<User>()

  useEffect(() => {
    if (user) setCurrentUser(user)
  }, [user])

  return (
    <div className="dropdown dropdown-end">
      {currentUser ? (
        <>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src={currentUser?.user_metadata?.avatar_url}
                alt="avatar"
                layout="responsive"
                height={10}
                width={10}
              />
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
          </ul>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default UserNav
