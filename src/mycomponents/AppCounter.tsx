import { Component, ReactNode } from "react";


class AppCounter extends Component {
    state={num:0};

    increment=()=>{
        console.log("increment");
        //this.state.num=this.state.num + 1;
        this.setState({num:this.state.num + 1});
    }
    decrement=()=>{
        console.log("decrement");
        //this.state.num=this.state.num-1;
        this.setState({num:this.state.num - 1});
    }
   

    render(): ReactNode {
       // console.log(this);
        return (
            <div className="container">
         
                <h1 className="alert alert-info">ReactJS Counter Application</h1>
                <h3>Value of num is {this.state.num }</h3>

                <button className="btn btn-primary" onClick={this.increment}>
                    Increment
                </button>
                <button className="btn btn-warning" onClick={this.decrement}>
                    Decrement
                </button>
            </div>
        )
    }
}

export default AppCounter;