import React, {Component} from "react";

export default class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: 0
        }

        //maneira 2
        //this.clickMethode = this.clickMethode.bind(this);
    }

    // clickMethode(){
    //     console.log(' --- click method begin --- ', this.state.clicked);
    //     this.setState({
    //         clicked: this.state.clicked + 1
    //     });
    //     console.log(' --- click method end --- ', this.state.clicked);
    // }

    //maneira 3, arrow function não guarda contexto
    clickMethode = () => {
        console.log(' --- click method begin --- ', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        });
        console.log(' --- click method end --- ', this.state.clicked);
    }

    render(){
        return (
            <div>
                {/* <button onClick={this.clickMethode} type="button">Click me</button> */}

                {/* //maneira 1 */}
                {/* <button onClick={this.clickMethode.bind(this)} type="button">Click me</button> */}

                {/* maneira 2 */}
                {/* <button onClick={this.clickMethode} type="button">Click me</button> */}

                 {/* maneira 3 */}
                <button onClick={this.clickMethode} type="button">Click me</button>

            </div>
        )
    }
}