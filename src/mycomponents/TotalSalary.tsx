import { Component, ReactNode } from "react";

interface TotalSalProps{
    hra:number;
    da:number;
    salary:number;
    printTotalSalary:any;
}

class TotalSalary extends Component<TotalSalProps>{

    calculateTotalSal=()=>{
        let hra=this.props.hra;
        let da=this.props.da;
        let salary=this.props.salary;

        let totalSal=hra+da+salary;
        this.props.printTotalSalary(totalSal);       
    }

    render(): ReactNode {
        return(
            <div>
                <button className="btn btn-primary" onClick={this.calculateTotalSal} >
                    Total Salary
                </button>
            </div>

        )
    }
}
export default TotalSalary;