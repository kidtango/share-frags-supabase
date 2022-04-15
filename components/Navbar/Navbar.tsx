import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react'

import { useRouter } from 'next/router'
import { AiOutlineHeart } from 'react-icons/ai'

import UserNav from './UserNav'

// interface INavbar {
//   isSidebarOpen: boolean
//   setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
// }

const Navbar: React.FC<INavbar> = () => {
  // const [session, loading] = useSession()
  const router = useRouter()
  const session = true

  // useEffect(() => {
  //   if (session) {
  //     localStorage.setItem('token', session.token)
  //   } else {
  //     localStorage.clear()
  //   }
  // }, [session])

  // if (loading) return <div>loading...</div>

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push('/new-post')
  }

  return (
    <div className="bg-white navbar">
      <div className="flex-1">
        <a className="text-xl normal-case btn btn-ghost">shareFrags</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full input input-bordered"
          />
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={1}
              className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* notification */}
        {/* wishlist */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <AiOutlineHeart className="w-5 h-5" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={1}
              className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* wishlist */}
        {/* UserNav */}
        <UserNav />
        {/* UserNav */}
      </div>
    </div>
  )
}

export default Navbar
