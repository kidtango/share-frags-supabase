import React, { FC, ReactNode, useState } from 'react'
import clsx from 'clsx'

import styles from './UnderlineButton.module.scss'

type Size = 'small' | 'medium' | 'large'

interface IUnderlineButton {
  children: ReactNode
  size: Size
  onClick?: () => void
}

const UnderlineButton: FC<IUnderlineButton> = ({ children, size }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => setIsSelected(!isSelected)

  const getSizeStyles = (size: Size) => {
    switch (size) {
      case 'small':
        return 'text-base flex items-center'
      case 'medium':
        return 'text-lg flex items-center'
      case 'large':
        return 'text-xl flex items-center'
    }
  }

  return (
    <button
      type="button"
      className={clsx(styles.underlineButton, isSelected && styles.active)}
      onClick={handleClick}
    >
      <span className={getSizeStyles(size)}>{children}</span>
    </button>
  )
}

export default UnderlineButton
