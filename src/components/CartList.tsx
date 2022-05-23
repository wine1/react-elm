import React from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../store/action/index'
import { Stepper } from 'antd-mobile'
// decrease increase
interface interfaceProps {
  list: any,
  addToCart: any,
  removeFromCart: any
}

const CartList: React.FC<interfaceProps> = (props) => {
  let { list, addToCart, removeFromCart } = props
  useEffect(() => {
  }, [])

  return (<div>
    {!!list?.length && list.map((item: any, index: number) => {
      return <div key={item.food_id} className="component-cartList">
        <img className='left-image' src={item?.img || ''} alt="" />
        <div className='center-info'>
          <div>{item.name}</div>
          <div>{item.specs}</div>
          <div>价格{item.price}</div>
        </div>
        <div className='right-count'>
          <Stepper
            value={item.count}
            min={1}
            onChange={(value: number) => {
              console.log(value)
            }}
          />
          {/* <p>

            <span onClick={() => removeFromCart(item.restaurant_id, item)}>-</span>
            <span>{item.count}</span>
            <span onClick={() => addToCart(item.restaurant_id, item)}>+</span>
          </p> */}
        </div>
      </div>
    }
    )}
  </div>)
}

const mapStateToProps = (state: any) => ({
})
export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(CartList)