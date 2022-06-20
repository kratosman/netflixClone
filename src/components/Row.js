import React, { useState } from 'react';
import prev from '../assets/prev.svg'
import next from '../assets/next.svg'

function Row({ title, movieItem }) {
    const [isTransform, setTransform] = useState(0);
    const clickHandlerPrev = () => { 
        let x = isTransform + Math.round(2000 / 2);
        if( x > 0) {
            x = 0;
        }
        setTransform(x)
    }
    const clickHandlerNext = () => {
        let x = isTransform - Math.round(2000 / 2);
        let list = movieItem?.length * 310;
        if((window.innerWidth - list) > x) {
            x = (window.innerWidth - list) - 60
        }
        setTransform(x)
    }
    
    return(
        <div className="row">
            <div className="row__header">
                    <h3>{title}</h3>
                </div>
            <div className="row__contents">
                
                <div className='row-images'>
                    {
                        movieItem.map(item => <>
                            <img style={{transform: `translateX(${isTransform}px)`}} src={"https://image.tmdb.org/t/p/w500"+item.backdrop_path} alt={item.title} /> 
                            
                        </>)
                    }
                    
                    
                </div>
                <div className="btn">
                    <button onClick={clickHandlerPrev} className="btn__button btn__prev" aria-label="Previous">
                        <img src={prev} alt="" />
                    </button>
                    <button onClick={clickHandlerNext} className="btn__button btn__next" aria-label="Next">
                        <img src={next} alt="" />
                    </button>
                    </div>
            </div> 
            
        </div>
    )
}
export default Row;