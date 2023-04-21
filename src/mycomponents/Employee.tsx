import { Component, ReactNode } from "react";
import TotalSalary from './TotalSalary';

class Employee  extends Component{

    state={
        ecode:101,
        hra:10000,
        da:5000,
        salary:50000,
        totalSalary:0
    };

displayTotalSal=(totSal:number)=>{
    this.setState({totalSalary:totSal})
}


    render(): ReactNode {
        return (
            <div className="container">
                <p>HRA:{this.state.hra}</p>
                <p>DA:{this.state.da}</p>
                <p>BASIC Salary:{this.state.salary}</p>
                <h3>Total salary:{this.state.totalSalary}</h3>
                <TotalSalary hra={this.state.hra} 
                            da={this.state.da} 
                            salary={this.state.salary} 
                            printTotalSalary={this.displayTotalSal}
                            />
            </div>
        )

    }
}
export default Employee;