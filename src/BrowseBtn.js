import React, {Component} from 'react';

class BrowseBtn extends Component{
    render(){
        return(
            <div>
                <button className='browseBtn'
                    onClick={()=>{this.props.browseFcn(this.props.next)}}>
                    {this.props.next?'Next >':'< Previous'}
                </button>
            </div>
        )
    }
}

export default BrowseBtn;