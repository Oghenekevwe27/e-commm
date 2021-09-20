import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div class='container bread '>
        <nav aria-label="breadcrumb container ">
  <ol class="breadcrumb   ">
    <li class="breadcrumb-item   breadcrumb-move " ><Link to="/" class="nav-words2 ">Home</Link></li>
    <li class="breadcrumb-item "><Link to="#" class="nav-words2 ">Hotdeal</Link></li>
    <li class="breadcrumb-item  active color-dark" aria-current="page" >Nike Airmax 270 React</li>
  </ol>
</nav>
    </div>
  )
}

export default Breadcrumb
