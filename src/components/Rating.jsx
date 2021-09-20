import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'

const Rating = () => {
const [rating,setrating]=useState(null) 
const [hover, sethover]=useState(null)

  return (
  
    <div>
        {[...Array(5)].map((star,i) =>{
                const ratingValue=i+1

            return( 
                <label>
            <input type="radio" name="rating" className="radiostar"
             value={ratingValue}
             onClick={()=>setrating(ratingValue)}/>
            {/* <i size={600} class="Fastar"></i> */}
                    <FaStar className='star'
                    color={ratingValue <= (hover || rating )? "#ffc107":"#C1C8CE"}
                    size={15}
                    onMouseEnter={()=> sethover(ratingValue)}
                    onMouseLeave={() => sethover(null)}
                    
                    />
                  
            </label>
           
           
           
           
           
           
           
           );
        })}
     
    </div>
  )
}

export default Rating

