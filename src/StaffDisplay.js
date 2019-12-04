import React, {Component} from 'react';
import Name from './Name';
import BasicInfo from './BasicInfo';
import Movie from './Movie';
import ListNumber from './ListNumber';

class StaffDisplay extends Component{

    componentDidMount(){

        console.log(this.props.staff);
    }

    render(){
        return(
            <div className='StaffDisplay'>
                <ListNumber num={this.props.staff.id} total={this.props.total}/>
                <Name fn={this.props.staff.name.first} ln={this.props.staff.name.last}/>
                <BasicInfo 
                    city={this.props.staff.city} 
                    country={this.props.staff.country}
                    title={this.props.staff.title}
                    employer={this.props.staff.employer}
                />
                <Movie movieArr={this.props.staff.favoriteMovies}/>
            </div>
        )
    }
}

export default StaffDisplay;