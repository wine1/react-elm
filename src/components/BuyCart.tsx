
import React, { useEffect, useState } from 'react';
import { connect, useStore } from 'react-redux'
import { clearCart } from "../store/action"
import { getCartList, getTotal, getCount } from "../store/reducer"
import { Button, Badge } from 'antd-mobile';
import classNames from 'classnames';
const BuyCart = (props: any) => {
    let { cartList, total, count, clearCart } = props
    const [showList, setShowList] = useState(false)

    const toggleShowList = () => {
        if (cartList.length) {
            setShowList(!showList)
        }
    }
    return (
        <div className="component-cart">
            <div className={classNames('cartlist-layer', { [`hide`]: !showList || !cartList.length })}></div>
            <div className={classNames('cartlist-ul', { [`hide`]: !showList || !cartList.length })}>
                <div className="cartlist-title">
                    <span>已选商品</span>
                    <Button onClick={clearCart}>清空</Button>
                </div>
                {!!cartList?.length && cartList.map((item: any) =>
                    <div className="cartlist-li" key={item._id}>
                        <div>{item.name}</div>
                        <div>价格 {item.price} 元</div>
                        <div>数量 {item.count}</div>
                    </div>)}
            </div>

            <div className="wrap-cart-icon ele_car_icon" onClick={toggleShowList}>
                <div>购物车</div>
                <div>{count}</div>
                <Badge text={count} hot style={{ marginLeft: 12 }} />

            </div>

            {!cartList?.length && <div>buy someting to eat</div>}
            <div>{total}</div>
            <Button type="ghost" inline size="small" style={{ marginRight: '4px', padding: '10px', }}>{total ? '去结算' : '购物车'}</Button>
        </div>
    )
}



const mapStateToProps = (state: any) => ({
    cartList: getCartList(state),
    total: getTotal(state),
    count: getCount(state)
})


export default connect(mapStateToProps, { clearCart })(BuyCart)
