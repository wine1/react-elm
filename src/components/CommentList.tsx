import { listenerCount } from 'events';
import React from 'react';

interface CommentListProps {
    list: any,
    isLoading: boolean,
    noData: boolean,
    onBottom: any,
}

interface CommentListState {
    scrollTop: number,
    recordScroll: boolean
}

export default class CommentList extends React.Component<CommentListProps, CommentListState> {

    constructor(props: any) {
        super(props)
        this.state = {
            // stateList: this.props.list,
            scrollTop: 0,
            recordScroll: false
        }
        this.handleOnScroll = this.handleOnScroll.bind(this)

    }

    observer: any

    componentDidMount() {
        // scroll
        try {
            const node: any = document.getElementById(`isloading`)
            this.observer = new IntersectionObserver(this.insideViewportCb);
            node && this.observer.observe(node);
        } catch (err) {
            console.log("err in finding node", err);
        }
        window.addEventListener("scroll", this.handleOnScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOnScroll)
        const node: any = document.getElementById(`isloading`)
        this.observer.unobserve(node);
        this.observer.disconnect();
    }

    insideViewportCb = () => {
        this.setState({
            recordScroll: true
        })
        let { scrollTop } = this.state
        if (this.props.list.length && scrollTop !== 0) {
            this.props.onBottom()
        }
    }

    handleOnScroll(e: any) {
        let { recordScroll } = this.state
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (recordScroll) {
            this.setState({
                scrollTop,
                recordScroll: false
            })
        }
    }

    render() {
        let { list, isLoading, noData } = this.props
        return (
            <div className="component-commentlist">
                {!!list.length && list.map(((item: any,index:number) => {
                    return (
                        <div className="commentlist-li" key={index}>
                            <div className="wrap-userinfo">
                                <img src={item.avatar} alt="" />
                                <p>{item.username}</p>
                                <p>{item.rated_at}</p>
                            </div>
                            {!!item.item_ratings.length && item.item_ratings.map((item: any,index:number) => {
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

                {isLoading && <div className="isLoading" id="isloading">加载中···</div>}
                {noData && <div>暂无数据</div>}
            </div>
        )
    }

}

