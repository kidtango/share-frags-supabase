import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react'

import { useRouter } from 'next/router'
import {
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from 'react-icons/hi'
// import { useSession, signout } from 'next-auth/client'

// import LoginButton from 'src/components/auth/login-button/LoginButton'
// import Button from 'src/components/buttons/Button'

// import UserMenu from '../user-menu/UserMenu'
import IconButton from '@components/buttons'
import ShareFragLogo from './ShareFragLogo'
import ToggleMenuButton from './ToggleMenuButton'
import SearchBar from '@components/search-bar'

interface INavbar {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<INavbar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
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
    <header className="bg-opacity-50 backdrop-filter backdrop-blur sticky top-0 z-30 h-[72px] w-full border-b shadow items-center flex">
      <div className="container mx-auto">
        <div className="flex items-center space-x-1">
          {/* mobile navbar */}

          {/* Navbar left */}

          {/* Toggle Sidebar Button */}
          <div className="mr-2">
            <ShareFragLogo />
          </div>
          <SearchBar />
          {/* Navbar Right */}
          {session ? (
            <div className="flex items-center space-x-2">
              <span className="hidden sm:block"></span>
              <div className="hidden space-x-1 md:flex"></div>
              <div className="mt-1">
                {/* <UserMenu session={session!} signout={signout} /> */}
                <button className="btn btn-primary">Hello daisyUI</button>
              </div>
            </div>
          ) : (
            <div className="">
              <LoginButton />
            </div>
          )}

          {/* mobile navbar */}
        </div>
      </div>
    </header>
  )
}

export default Navbar
