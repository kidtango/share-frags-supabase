import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Session } from 'next-auth'

import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'

import AvatarButton from '../../buttons/AvatarButton'

const menuItemStyles = () =>
  `block px-4 py-2 text-sm transition-colors rounded-md cursor-pointer text-gray-50 hover:bg-primary-200 flex items-center space-x-2`

interface IUserMenu {
  session: Session
  signout: () => Promise<void>
}

const UserMenu: FC<IUserMenu> = ({ session, signout }) => {
  return (
    <Menu>
      {() => (
        <div className="relative inline-block text-left">
          <Menu.Button className="focus:outline-none">
            <AvatarButton size="medium" image={session?.user!.image} />
          </Menu.Button>
          {/* Use the Transition + open render prop argument to add transitions. */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 z-50 w-48 p-2 origin-top-right rounded-md shadow-lg bg-primary-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <Menu.Item>
                {() =>
                  session ? (
                    <div className={menuItemStyles()} onClick={signout}>
                      <FaSignOutAlt />
                      <span>Sign Out</span>
                    </div>
                  ) : (
                    <Link href="/auth/signin">
                      <div className={menuItemStyles()}>
                        <FaSignInAlt />
                        <span>Sign In</span>
                      </div>
                    </Link>
                  )
                }
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <div className={menuItemStyles()}>
                    <AiOutlineSetting />
                    <span>Profile Settings</span>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default UserMenu

// className =
//   'w-full px-4 py-2 text-sm transition-colors rounded-md cursor-pointer text-gray-50 hover:bg-primary-200'
