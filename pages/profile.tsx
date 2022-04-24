/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { AiFillCamera, AiOutlineHeart } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { BsShop, BsSliders } from 'react-icons/bs'
import { FaShippingFast } from 'react-icons/fa'
import Layout from '@components/common/Layout'
import Card, { CardShop } from '@components/Card'
import { range } from 'lodash'

export default function Profile() {
  const hasImage = true
  return (
    <>
      <div className="flex gap-4">
        <div className="relative mr-4">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <div>
                <img src="https://i.etsystatic.com/iusa/313431/93537876/iusa_400x400.93537876_okqj.jpg?version=0" />
              </div>
            </div>
          </div>
          <button className="absolute bg-white btn-ghost -bottom-2 left-14 btn btn-circle hover:bg-secondary">
            <AiFillCamera className="w-6 h-6 text-black " />
          </button>
        </div>
        {/* Name Section */}
        <div className="flex items-baseline gap-4">
          <div>
            <div className="text-4xl font-semibold tracking-wide">
              Cuong Tang
            </div>
            <div className="">Reef Farmer</div>
          </div>
          <div className="btn-circle btn">
            <HiPencil className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex mt-10 space-x-4">
        {/* Favorite items section */}
        <div className="">
          <div className="">
            <button className="flex items-center text-center transition-all shadow-md opacity-75 w-36 card bg-base-100 ring-2 ring-base-200 hover:bg-base-200 hover:ring-offset-2 hover:opacity-100">
              <div className={`${hasImage ? 'p-0 card-body' : 'card-body'}`}>
                {hasImage ? (
                  <img
                    src="https://i.etsystatic.com/22080802/r/il/1c82f4/2241907053/il_340x270.2241907053_p7b5.jpg"
                    className=""
                  />
                ) : (
                  <AiOutlineHeart className="w-9 h-9" />
                )}
              </div>
            </button>
          </div>
          <div className="mt-2 text-sm tracking-wider">
            <div className="font-bold">Favorite items</div>
            <div className="font-semibold">4 Items</div>
          </div>
        </div>

        {/* Shops */}
        <div className="">
          <div className="">
            <button className="flex items-center text-center transition-all shadow-md opacity-75 w-36 card bg-base-100 ring-2 ring-base-200 hover:bg-base-200 hover:ring-offset-2 hover:opacity-100">
              <div className={`${hasImage ? 'card-body p-0' : 'card-body'}`}>
                {hasImage ? (
                  <img src="https://i.etsystatic.com/18962713/r/il/2392e7/2251486003/il_340x270.2251486003_qv5r.jpg" />
                ) : (
                  <BsShop className="w-12 h-12" />
                )}
              </div>
            </button>
          </div>
          <div className="mt-2 text-sm tracking-wider">
            <div className="font-bold">Favorite shops</div>
            <div className="font-semibold">2 Shops</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <h1 className="text-2xl font-bold tracking-wide">Favorite items</h1>
        <button className="gap-1 font-semibold rounded-full btn btn-outline btn-md">
          <span>
            <BsSliders />
          </span>
          <span className="normal-case">Filters</span>
        </button>
      </div>
      {/* Item cards */}
      <div className="flex flex-wrap justify-between gap-4 mt-10">
        {range(0, 12).map((e) => (
          // <Card key={e} />
          <CardShop key={e} />
        ))}
      </div>
    </>
  )
}

Profile.Layout = Layout
