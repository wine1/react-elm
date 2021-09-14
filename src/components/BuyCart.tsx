
import React from 'react';
import { connect } from 'react-redux'
import { clearCart } from "../store/action"
import { getCartList, getTotal } from "../store/reducer"
import { Button } from 'antd'
const BuyCart = (props: any) => {
    let { cartList, total } = props
    return (
        <div className="component-cart">
            <div>购物车</div>
            {!!cartList?.length && cartList.map((item: any) =>
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.count}</div>
                </div>)}
            {!cartList?.length && <div>buy someting to eat</div>}
            <Button onClick={clearCart}>清除购物车</Button>
            <div>{total}</div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    cartList: getCartList(state),
    total: getTotal(state)
})


export default connect(mapStateToProps, { clearCart })(BuyCart)
