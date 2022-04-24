import React from 'react'

const CardShop = () => {
  return (
    <div className="shadow-xl w-fit card card-compact bg-base-100 md:w-[49%]">
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
      <div className="flex p-4">
        <div className="avatar">
          <div className="rounded-lg object-contain w-[10%] ">
            <img src="https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/04/SHScoly2.042122.042122-1.jpg?strip=all&lossy=1&ssl=1" />
          </div>
        </div>

        <div>Aqua Ops</div>
      </div>
    </div>
  )
}

export default CardShop
