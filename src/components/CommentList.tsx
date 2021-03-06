import React, { useState, useRef } from 'react';
import { Observer } from 'redux';

interface CommentListProps {
    list: any,
    isLoading: boolean,
    noData: boolean,
    onBottom: () => void,
}

// interface CommentListState {
//     scrollTop: number,
//     recordScroll: boolean
// }

const { useEffect } = React

const CommentList: React.FC<CommentListProps> = (props) => {
    let { list, isLoading, noData, onBottom } = props

    const observer = useRef<any>()
    useEffect(() => {
        //  scroll
        try {
            const node: any = document.getElementById(`isloading`)
            observer.current = new IntersectionObserver(insideViewportCb);
            node && observer.current.observe(node);
        } catch (err) {
            console.log("err in finding node", err);
        }
        return () => {
            observer.current.disconnect()
        }
    }, [])

    // useEffect(() => {
    //     console.log('change')
    //     window.addEventListener("scroll", handleOnScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleOnScroll);
    //     }
    // }, [])

    const insideViewportCb = () => {
        // console.log(11111, scrollTop)
        // shouldRecordScroll(() => true)
        // if (list.length && scrollTop !== 0) {
        onBottom()
        // }

    }

    // const handleOnScroll = (e: any) => {
    //     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    //     console.log(scrollTop, recordScroll)
    //     if (recordScroll) {
    //         console.log(23455)
    //         recordScrollTop(() => scrollTop)
    //         shouldRecordScroll(() => false)
    //     }
    // }

    return (
        <div className="component-commentlist">
            {!!list.length && list.map(((item: any, index: number) => {
                return (
                    <div className="commentlist-li" key={index}>
                        <div className="wrap-userinfo">
                            <img src={item.avatar} alt="" />
                            <p>{item.username}</p>
                            <p>{item.rated_at}</p>
                        </div>
                        {!!item.item_ratings.length && item.item_ratings.map((item: any, index: number) => {
                            return (
                                <div className="comment-content" key={index}>
                                    <img src={item.image_hash} alt="" />
                                    <p>{item.food_name}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            }))}

            {isLoading && <div className="isLoading" id="isloading">???????????????</div>}
            {noData && <div>????????????</div>}
        </div>
    )



}

export default CommentList