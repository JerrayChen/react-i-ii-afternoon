import React, {Component} from 'react';

class ListNumber extends Component{
    render(){
        return(
            <div className='ListNumber'>
                {this.props.num}/{this.props.total}
            </div>
        )
    }
}

export default ListNumber;