import React, {Component} from 'react';

class ModifyBtn extends Component{
    render(){
        return(
            <div>
                {/* will add component for black diamond */}
                <button className='mBtn'>Edit</button>
                <button className='mBtn'>Delete</button>
                <button className='mBtn'>New</button>
            </div>
        )
    }
}

export default ModifyBtn;