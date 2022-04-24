import React from 'react'
import { AiFillCamera, AiOutlineHeart } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'

const Card = () => {
  return (
    <div className="w-full transition-all hover:shadow-xl card hover:cursor-pointer sm:w-52 lg:w-80">
      <figure className="relative">
        <div className="absolute top-0 right-0">
          <div className="p-2 text-white rounded-full hover:text-accent">
            <AiOutlineHeart className="w-12 h-12" />
          </div>
        </div>
        <img
          src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/RD3.C6.040622A-1.jpg?strip=all&lossy=1&ssl=1"
          alt="Shoes"
          className="object-cover"
        />
        <div className="absolute flex items-center gap-2 p-2 px-4 text-xl font-semibold bg-teal-100 rounded-full bottom-4 left-4">
          <span>
            <FaShippingFast />
          </span>
          <span>$50.00</span>
        </div>
      </figure>
    </div>
  )
}

export default Card
