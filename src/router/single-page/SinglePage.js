import React from 'react'
import "./SinglePage.css"
import {PRODUCTS} from "../../static/static"
import {useParams} from "react-router-dom"

function SinglePage() {
    const {id} = useParams()
    let filterData = PRODUCTS.find(item=> item.id === Number(id))

  return (
    <div className='single_page'>
        <div className="single_page_right">
        <img src={filterData?.img} alt="" />

        </div>
        <div className="single_page_left">
          <h2 className='apple'>2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold</h2>
          <p className="visit">Visit the Apple Store</p>
          <p className="star">⭐⭐⭐⭐⭐  13,150 ratings | 576 answered questions</p>
          <p className="choise">Amazon's Choice in Traditional Laptop Computers by Apple</p>
          <p className="pledge">😈 Climate Pledge Friendly Climate Pledge Friendly</p>
          <div className="hr"><hr /></div>
          <p className="narx">Price:$973.50</p>
        </div>
    </div>
  )
}

export default SinglePage