import React, { Component } from 'react';

class BasicInfo extends Component {
    render() {
        return (
            <div className='BasicInfo'>
                <div><span className='InfoTitle'>From: </span>{this.props.city}, {this.props.country}</div>
                <div><span className='InfoTitle'>Job Title: </span>{this.props.title}</div>
                <div><span className='InfoTitle'>Employer: </span>{this.props.employer}</div>
            </div>
        )
    }
}

export default BasicInfo;