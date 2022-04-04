import React, { FC } from 'react'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'

interface IToggleMenuButton {
  isSidebarOpen: boolean
  [x: string]: any
}

const ToggleMenuButton: FC<IToggleMenuButton> = ({
  isSidebarOpen,
  ...props
}) => {
  return (
    <button
      className="p-2 bg-transparent rounded-md focus:(outline-none ring-primary ring-2)"
      {...props}
    >
      {props.isSidebarOpen ? (
        <HiChevronDoubleLeft className="text-2xl text-primary-400 hover:text-primary-100" />
      ) : (
        <HiChevronDoubleRight className="text-2xl text-primary-400 hover:text-primary-100" />
      )}
    </button>
  )
}

export default ToggleMenuButton
