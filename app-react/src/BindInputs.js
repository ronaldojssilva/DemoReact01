import React, {Component} from 'react';

export default class BindInputs extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '', desc:'', age:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        const {target} = event;
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        this.setState({
            //name: event.target.value
           [name]: value
        });
    }

    render(){
        console.log(this.state);
        const {data} = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder='Enter your name ...'/>
                <input type="text" onChange={this.handleChange} name="desc" id="name" placeholder='Enter your name ...'/>
                <input type="number" onChange={this.handleChange} name="age" id="name" placeholder='Enter your name ...'/>
            </div>
        )
    }
}
