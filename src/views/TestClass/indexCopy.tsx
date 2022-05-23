
import React from 'react';
class testClass extends React.Component {
    state = {
        number: 1
    }
    componentDidMount() {
        this.setState({ number: 3 })
        console.log(123, this.state.number)
        setTimeout(() => {
            this.setState({
                count: this.state.number++
            })
            console.log(456, this.state.number)
        }, 0);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default testClass