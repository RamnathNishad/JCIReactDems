import { Component, ReactNode } from "react";


class AppCounter extends Component {
    state={num:0};

    constructor(props:any){
        super(props);
        console.log("constructor is called at ", new Date());
    }

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
   
    componentDidMount(): void {
        console.log("componetDidMount is called at ",new Date());
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps() is called at ",new Date());
        return true;
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log("shoulComponentUpdate() is called");
        return true;
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("componentDidUpdate() is called");
    }





    render(): ReactNode {
       // console.log(this);
       console.log("render() is called at ", new Date());
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