import React from 'react'
import Collection from './Collection'
import FirstThree from './FirstThree'

// import Header from './Header'
import Headimage from './Headimage'
// import Navbar from './Navbar'
import Search from './Search'
import Secondsection from './Secondsection'
// import Tablets from './Tablets'
import Footer from "./Footer";

const Ecomm = () => {
    return (
      <div>
        <Headimage />
        {/* <Tablets/> */}
        <FirstThree />
        <Collection />
        <Secondsection />
        <Search />
        <Footer />
      </div>
    );
}

export default Ecomm;
