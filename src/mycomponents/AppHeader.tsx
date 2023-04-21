import { Component, ReactNode } from "react";

interface HeaderProps{
    title:string;
    subheading:string;
}


class AppHeader extends Component<HeaderProps> {
    render(): ReactNode {
        console.log(this);

        return (
            <div>
                <form>
                   
                </form>
                <h1>{this.props.title} </h1>
                <p>{this.props.subheading}</p>
                <hr/>
            </div>
        )
    }
}

export default AppHeader;