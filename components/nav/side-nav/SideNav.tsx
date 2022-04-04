import React, { FC } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { FaShoppingBasket } from 'react-icons/fa'
import { CgHashtag } from 'react-icons/cg'
import clsx from 'clsx'

interface ISidebar {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideNav: FC<ISidebar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleMoustEnter = () => setIsSidebarOpen(true)
  const handleMoustLeave = () => setIsSidebarOpen(false)

  return (
    <div className="absolute rounded left-2">
      <aside
        className={asideStyles(isSidebarOpen)}
        onMouseEnter={handleMoustEnter}
        onMouseLeave={handleMoustLeave}
      >
        {/* Sidebar header */}
        {/* Items */}
        <button className={sideNavButtonStyles(isSidebarOpen)}>
          <HiOutlineHome className="w-6 h-6" />
          {isSidebarOpen && <span>Home</span>}
        </button>
        <button className={sideNavButtonStyles(isSidebarOpen)}>
          <FaShoppingBasket className="w-6 h-6" />
          {isSidebarOpen && <span>Shops</span>}
        </button>
        <button className={sideNavButtonStyles(isSidebarOpen)}>
          <CgHashtag className="w-6 h-6" />
          {isSidebarOpen && <span>Tags</span>}
        </button>
        {/* Items ends */}
      </aside>
    </div>
  )
}

export default SideNav

function asideStyles(isSidebarOpen: Boolean) {
  const base =
    'flex flex-col transition-all transform bg-ebonyClay-900 bg-opacity-50 rounded drop-shadow-lg backdrop-filter backdrop-blur w-64 p-4 items-center space-y-3 ring ring-ebonyClay-600'
  const sidebarClosed =
    '-translate-x-full w-0 sm:translate-x-0 sm:w-0 lg:translate-x-0 lg:w-20 px-0 ring-0'

  return isSidebarOpen ? base : clsx(base, sidebarClosed)
}

function sideNavButtonStyles(isSidebarOpen: Boolean) {
  const base =
    'flex w-full p-2 outline-none text-primary-400 focus:outline-none hover:text-primary-100 space-x-2 font-semibold'

  const sidebarOpen =
    'transition-colors duration-200 rounded-md bg-primary-600 hover:text-primary-100 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400'

  const sidebarClosed = 'justify-center'

  const isOpen = isSidebarOpen ? sidebarOpen : sidebarClosed

  return clsx(base, isOpen)
}
