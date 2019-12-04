import React, {Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <div className='Movie'>
                <span className='InfoTitle'>Favorite Movies:</span>
                <ol>
                    {this.props.movieArr.map((e,i)=>{
                        return (
                            <li key={i}>{e}</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default Movie;