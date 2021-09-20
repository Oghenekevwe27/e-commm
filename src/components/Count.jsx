import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(1)
  return (
    <div> 
      {/* <buotton></buotton>
      <buotton  ></buotton>
      <buotton ></buotton> */}
      <div class="btn-group" role="group" >
  <button   onClick={()=>{setCount(count - 1)}} disabled={count<=1} type="button" class="btn countbtn bg-primary "><i  class="fas fa-minus"></i></button>
  <button type="button" class="btn countbtn bg-primary" >{count}</button>
  <button onClick={()=>{setCount(count + 1)}} type="button" class="btn countbtn bg-primary "><i  class="fas fa-plus"></i></button>
</div>
    
    
    
    </div>
  )
}

export default Count;
