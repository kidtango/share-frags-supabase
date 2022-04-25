import React from 'react'
import { AiFillStar, AiOutlineStar, AiTwotoneHeart } from 'react-icons/ai'

const CardShop = () => {
  return (
    <div className="shadow-xl w-fit card card-compact bg-base-100 md:w-[49%] ring-1 ring-gray-300">
      <figure className="flex">
        <img
          src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/SJ.K3.040722A-1.jpg?strip=all&lossy=1&ssl=1"
          alt="Shoes"
          className="object-contain w-1/4"
        />
        <img
          src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/BN5A3054.jpg?strip=all&lossy=1&ssl=1"
          alt="Shoes"
          className="object-contain w-1/4"
        />
        <img
          src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/EC.T7.042022-1.jpg?strip=all&lossy=1&ssl=1"
          alt="Shoes"
          className="object-contain w-1/4"
        />
        <img
          src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/SHScoly2.042122.042122-1.jpg?strip=all&lossy=1&ssl=1"
          alt="Shoes"
          className="object-contain w-1/4"
        />
      </figure>
      <div className="flex justify-between p-4">
        <div className="flex gap-4 ">
          <div className="avatar">
            <div className="w-16 rounded-xl">
              <img src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/SHScoly2.042122.042122-1.jpg?strip=all&lossy=1&ssl=1" />
            </div>
          </div>
          <div>
            <div className="mb-1 space-x-2">
              <span className="text-xl font-bold tracking-wide">Aqua Ops</span>
              <span className="p-1 px-2 text-sm font-semibold bg-orange-400 rounded-full ring-1 ring-orange-200">
                Premium Vendor
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <div className="ml-1">(321)</div>
              </div>
              <div>Austin, TX</div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2 rounded-full ring-1 ring-gray-300">
            <AiTwotoneHeart className="text-red-700 " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShop
