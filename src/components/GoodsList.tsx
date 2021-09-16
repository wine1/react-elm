
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames';
import ProductItem from './ProductItem';
import { addToCart } from '../store/action/index'
import BScroll from '@better-scroll/core'
interface interProps {
    list: Array<any>,
    addToCart: any
}
const GoodsList = (props: interProps) => {

    let { list, addToCart } = props
    let initRightScroll: any = null
    const [leftIndex, setleftIndex] = useState(0)
    const [listHeightRecord, setListHeightRecord] = useState([])
    const [rightScroll, setRightScroll] = useState(initRightScroll)

    useEffect(() => {
        let temp: any = []
        if (list?.length) {
            list.forEach((item: any, index: number) => {
                if (index === 0) {
                    temp.push(0)
                } else {
                    temp.push(25 + temp[index - 1] + item.foods.length * 60)
                }
            })
            setListHeightRecord(temp)
            console.log('listHeightRecord', listHeightRecord, temp)
        }
        const wrapper: any = document.querySelector('.wrapper')
        if (wrapper) {
            setTimeout(() => {
                let rightScroll = new BScroll(wrapper, {
                    scrollY: true,
                    click: true,
                    useTransition: true,
                    bindToWrapper: true,
                    probeType: 3,
                })
                setRightScroll(rightScroll)
                rightScroll.on('scroll', (res: any) => {
                    if (res.y < temp[leftIndex + 1]) {
                        setleftIndex(leftIndex + 1)
                    } else if (res.y > temp[leftIndex]) {
                        setleftIndex(leftIndex - 1)
                    }
                })
            }, 0);

        }
    }, [list])

    console.log('list', list)

    const listLeft = (index: number) => {
        setleftIndex(index)
        let scroll = -listHeightRecord[index]
        rightScroll.scrollTo(0, scroll, 1000)
    }
    return (
        <div className="component-goodlist">
            <div className="goodlist">
                <div className="wrap-left">
                    {!!list.length && list.map((item: any, index: number) =>
                        <div className="wrap-left-ul" key={item.id}>
                            <div className={classnames('wrap-left-li', { ['active']: leftIndex === index })} onClick={() => listLeft(index)}>{item.name}</div>
                        </div>
                    )}
                </div>
                <div className="wrap-right">
                    <div className="wrapper">
                        <div className="content">
                            {!!list.length && list.map((item: any) =>
                                <div key={item.id} className="li">
                                    <div className="list-title">{item.name}</div>
                                    {!!item.foods?.length && item.foods.map((item: any) => {
                                        return <div key={item.item_id}>
                                            <ProductItem name={item.name} description={item.description} specfoods={item.specfoods} onAddToCartClicked={() => addToCart(item.restaurant_id, item.specfoods[0])}></ProductItem>
                                        </div>
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

const mapStateToProps = (state: any) => ({
})
export default connect(
    mapStateToProps,
    { addToCart }
)(GoodsList)