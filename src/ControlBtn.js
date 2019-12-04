import React, {Component} from 'react';
import BrowseBtn from './BrowseBtn';
import ModifyBtn from './ModifyBtn';

class ControlBtn extends Component{
    render(){
        return(
            <div className='ControlBtn'>
                <BrowseBtn next={false} browseFcn={this.props.browseFcn} arrInd={this.props.arrInd}/>
                <ModifyBtn/>
                <BrowseBtn next={true} browseFcn={this.props.browseFcn} arrInd={this.props.arrInd}/>
                
            </div>
        )
    }
}

export default ControlBtn;