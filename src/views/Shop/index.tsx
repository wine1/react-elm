import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'

import API from "../../server/api"
import CommentList from '../../components/CommentList'
import GoodsList from '../../components/GoodsList'
import BuyCart from '../../components/BuyCart'

class Shop extends React.Component<RouteComponentProps> {

    state = {
        shopId: 0,
        listIndex: 0,
        dataHeader: {
            image: '',
            name: '',
            info: ''
        },
        goodsList: [],
        commentsList: {
            list: [],
            pageIndex: 0,
            noData: false,
            isLoading: true
        }
    }

    render() {
        return (
            <div className="wrap-shop">
                {this._renderHeader()}
                {this._renderMain()}
            </div>
        )
    }

    componentDidMount() {
        this.initData()
    }

    initData = async () => {
        let res: any = await API.getshop()
        console.log('shop', res)
        if (res) {
            let { image_path: image, name, promotion_info: info, id } = res
            this.getFoodsListData(id)
            this.getCommentsListData(id)
            this.setState({
                dataHeader: {
                    image,
                    name,
                    info
                },
                shopId: id,
            })

        }
    }

    getFoodsListData = async (id: number) => {
        let resList: any = await API.getFoodsList({ params: { 'restaurant_id': id } })
        // console.log('goodslist', resList)
        if (resList) {
            this.setState({
                goodsList: resList
            })
        }

    }

    getCommentsListData = async (id: number, limit = 10) => {
        let { commentsList } = this.state
        let pageIndex = ++commentsList.pageIndex
        let resList: any = await API.getCommentList(id, { params: { 'offset': pageIndex * limit, 'limit': limit } })
        console.log('commentslist', resList)
        if (resList.length) {
            let isLoading = true
            if (resList.length < limit) {
                isLoading = false
            }
            this.setState((state: any, props) => {
                // console.log(state, props)
                let list = state.commentsList.list.concat(resList)
                let noData = false
                if (list.length) {
                    noData = true
                }
                return {
                    commentsList: {
                        list,
                        noData,
                        isLoading,
                        pageIndex
                    }
                }
            })
        }

    }


    _renderHeader = () => {
        let { dataHeader } = this.state
        return (
            <div className="wrap-header">
                <img src={dataHeader.image} alt="" />
                <div>
                    <p>{dataHeader.name}</p>
                    <p>{dataHeader.info}</p>
                </div>
            </div>
        )
    }
    _renderMain = () => {
        let { listIndex } = this.state
        const handleChange = (e: any) => {
            let index = e.target.dataset.index
            this.setState({
                listIndex: parseInt(index)
            })
        }
        return (
            <div className="wrap-main">
                <ul className="wrap-tab">
                    <li className={listIndex === 0 ? 'active-tab' : 'tab'} data-index='0' onClick={(e) => handleChange(e)}>商品</li>
                    <li className={listIndex === 1 ? 'active-tab' : 'tab'} data-index='1' onClick={(e) => handleChange(e)}>评价</li>
                </ul>
                <ul className="wrap-content">
                    <li className={listIndex === 0 ? 'show' : 'hide'}>{this._renderGoodsList()}</li>
                    <li className={listIndex === 1 ? 'show' : 'hide'}>{this._renderCommentList()}</li>
                </ul>
            </div>
        )
    }

    _renderGoodsList = () => {
        return (
            <div>
                <GoodsList list={this.state.goodsList}></GoodsList>
                <BuyCart></BuyCart>
            </div>
        )
    }

    _renderCommentList = () => {
        let { commentsList } = this.state
        return (
            <div>
                <CommentList
                    list={commentsList.list}
                    isLoading={commentsList.isLoading}
                    noData={commentsList.noData}
                    onBottom={() => this.bottom()}>
                </CommentList>
            </div>
        )
    }
    bottom = () => {
        // console.log('bottom')
        let { shopId } = this.state
        this.getCommentsListData(shopId)
    }
}

export default withRouter(Shop)