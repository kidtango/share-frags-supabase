import clsx from 'clsx'
import React, { SyntheticEvent, FC, ReactNode } from 'react'

type Size = 'small' | 'medium' | 'large'
type ButtonType = 'primary' | 'secondary' | 'plain' | 'fullWidth'

interface ButtonStates {
  disabled: Boolean
  isActive?: Boolean
}

interface IButton {
  children: ReactNode
  buttonStates?: ButtonStates
  active?: Boolean
  buttonType: ButtonType
  size: Size
  onClick?: (e: SyntheticEvent) => void
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button: FC<IButton> = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={buttonStyles(props)}
      disabled={props.buttonStates?.disabled as boolean}
    >
      {props.children}
    </button>
  )
}

export default Button

export const buttonStyles = (props: IButton) => {
  const base =
    'flex items-center px-2 py-2 space-x-1 text-xl transition-all outline-none bg-opacity-100 hover:bg-opacity-90 focus:outline-none flex text-gray-200'
  const size = {
    small: 'text-xs',
    medium: 'text-base',
    large: 'text-lg',
  }
  const buttonType = {
    primary:
      'space-x-1 bg-primary-500 p-2 px-3 rounded hover:bg-opacity-60 outline-none focus:outline-none focus:ring focus:ring-primary-400 font-semibold',
    secondary:
      'text-primary rounded ring ring-primary-600 hover:text-primary-600 font-semibold text-primary-500',
    plain:
      'ring-0 text-primary-300 hover:p-2 hover:bg-primary-700 hover:rounded font-semibold focus:ring focus:ring-primary-400 focus:rounded',
    fullWidth:
      'flex items-center justify-center w-full p-1 space-x-2 rounded bg-primary-500 hover:ring hover:ring-primary-600',
  }
  const states = {
    disabled: 'text-gray-300 opacity-30 ring ring-gray-400 hover:text-gray-300',
  }
  return clsx(
    base,
    size[props.size],
    buttonType[props.buttonType],
    props?.buttonStates?.disabled && states.disabled,
  )
}
