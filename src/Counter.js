import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });

    }

    static getDerivedStateFromProps(props, state) {
        // used to copy any values from props over to state;
        if (props.seed &&
            state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }


    componentDidMount() {
        console.log("Component Did Mount")
        console.log("================================")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should Component Update")
        // used rarely to gain in performance
        if (nextProps.ignoreProp &&
            this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("should Component Update - DO NOT RENDER")
            return false;
        }
        console.log("should Component Update - RENDER")
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("get Snapshot Before Update")
        // allows to capture previous properties before state; (ie. list scrolled to specific location)
        // gets passed into component did update() as a snapshot
        return null;
    }


    render() {
        console.log("Render")

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update")
        console.log("================================")
    }


    componentWillUnmount() {
        console.log("Component Will Unmount")
        console.log("================================")
    }

    componentDidCatch(ereror, info) {
        // gives chance to handle any errors
        console.log("Component did catch")
    }

}

export default Counter;