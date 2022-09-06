import React, {Component} from 'react';

export default class Clock extends Component{
    render(){
        const returnClock = () =>{
            return new Date()
            .toLocaleString( 'en-US',{
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        };

        const cor = 'red';

        return (
           <h1 className={cor}>
            {
               returnClock()   
            }
           </h1>
        );
    }
}