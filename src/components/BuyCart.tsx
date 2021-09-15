
import React, { useEffect, useState } from 'react';
import { connect, useStore } from 'react-redux'
import { clearCart } from "../store/action"
import { getCartList, getTotal, getCount } from "../store/reducer"
import { Button } from 'antd'
const BuyCart = (props: any) => {
    let { cartList, total, count, clearCart } = props
    return (
        <div className="component-cart">
            <div>购物车</div><div>{count}</div>
            {!!cartList?.length && cartList.map((item: any) =>
                <div className="cartlist-li" key={item._id}>
                    <div>{item.name}</div>
                    <div>价格 {item.price} 元</div>
                    <div>数量 {item.count}</div>
                </div>)}
            {!cartList?.length && <div>buy someting to eat</div>}
            <Button onClick={clearCart}>清除购物车</Button>
            <div>{total}</div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    cartList: getCartList(state),
    total: getTotal(state),
    count: getCount(state)
})


export default connect(mapStateToProps, { clearCart })(BuyCart)
