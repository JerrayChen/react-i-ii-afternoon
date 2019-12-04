import React, {Component} from 'react';

class Name extends Component{
    render(){
        return(
            <div className='Name'>
                <span>{this.props.fn} {this.props.ln}</span>
            </div>
        )
    }
}

export default Name;