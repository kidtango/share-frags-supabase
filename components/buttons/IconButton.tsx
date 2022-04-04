import React, { ReactNode } from 'react'

export interface IButtonIcon {
  Icon: ReactNode
  srMessage?: String
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const IconButton: React.FC<IButtonIcon> = ({ Icon, srMessage, onClick }) => (
  <button className={IconButtonStyles()} onClick={onClick}>
    <span className="sr-only">{srMessage}</span>
    <span>{Icon}</span>
  </button>)


export default IconButton

const IconButtonStyles = () => {
  const main = 'p-2.5 transition-colors duration-200 rounded-full bg-opacity-40 text-wedgewood-400 backdrop-filter hover:bg-wedgewood-50 focus:bg-catskill-white-600 focus:outline-none focus:ring-2 focus:ring-wedgewood-400'

  return main
}
