
import React from 'react';

const ProductItem = (props: any) => {
    let { name, description, specfoods, onAddToCartClicked } = props
    // console.log(123, onAddToCartClicked)
    const clickAdd = (e: any) => {
        let x = e.pageX
        let y = e.pageY
        createBall01(x, y)
    }
    function createBall01(left: number, top: number) {
        let bar = document.createElement('div')
        bar.style.position = 'absolute'
        bar.style.left = (left - 20) + 'px'
        bar.style.top = (top - 20) + 'px'
        bar.style.width = '20px'
        bar.style.height = '20px'
        bar.style.borderRadius = '50%'
        bar.style.backgroundColor = '#3390e8'
        bar.style.zIndex = '1'
        bar.style.transition = 'left 1s linear, top 1s cubic-bezier(0.5, -0.5, 1, 1)'

        document.body.appendChild(bar)
        // 添加动画属性
        setTimeout(() => {
            let target: any = document.querySelector('.ele_car_icon')
            console.log(111111111, target.offsetLeft, target.offsetWidth, target.offsetTop)
            bar.style.left = (target.offsetLeft + target.offsetWidth / 2) + 'px'
            bar.style.top = document.body.clientHeight + 'px'
        }, 0);
        setTimeout(() => {
            document.body.removeChild(bar)
        }, 1000)

    }

    return (
        <div className="component-productItem">
            {/* {!!list?.length && list.map((item: any) => */}
            <div className="sub-li">
                <div>{name}</div>
                <div>{description}</div>
                {!!specfoods?.length && specfoods.map((item: any, index: number) =>
                    <div key={index}>{item.price}</div>)}
                <div onClick={clickAdd}>
                    <button onClick={onAddToCartClicked}>+1</button>
                </div>
            </div>
            {/* )} */}
        </div>
    )
}

export default ProductItem