import React, { FC } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import clsx from 'clsx'

type Size = 'small' | 'medium' | 'large'

export interface AvatarButtonProps {
  size: Size
  image?: string | undefined | null
  [x: string]: any
}

const AvatarButton: FC<AvatarButtonProps> = ({
  image = 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg',
  size,
}) => {
  return (
    <div className={avatarBtnStyles(size)}>
      {image ? (
        <img className={imgSizeStyles(size)} src={image} alt="User Avatar" />
      ) : (
        <BiUserCircle className="text-gray-300" />
      )}
    </div>
  )
}

export default AvatarButton

const avatarBtnStyles = (size: Size) => {
  const base =
    'p-0.5 rounded-full rounded-full bg-gradient-to-tr from-green-300 to-blue-600'
  const small = 'text'
  const medium = 'text-2xl'
  const large = 'text-4xl'

  return clsx(
    base,
    size === 'small' && small,
    size === 'medium' && medium,
    size === 'large' && large,
  )
}

const imgSizeStyles = (size: Size) => {
  const small = 'object-cover w-8 h-8 rounded-full'
  const medium = 'object-cover w-10 h-10 rounded-full md:w-10 md:h-10'
  const large = 'object-cover w-20 h-20 rounded-full'

  switch (size) {
    case 'small':
      return small
    case 'medium':
      return medium
    case 'large':
      return large
  }
}
