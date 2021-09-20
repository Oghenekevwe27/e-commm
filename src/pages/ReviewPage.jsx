import React, { useState } from 'react';
import Count from '../components/Count';
import "../styles/custom2.scss";

import Rating from '../components/Rating';
import Slate from '../components/Slate';
import { useStateValue } from '../components/StateProvider';
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb"
const ReviewPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      //  item :{
      //    id:id,
      //    image: image,
      //    title :tittk
      //  }
    });

    //  const image = ({image
    //   })
  };
  // const [content, setContent] = useState('');


  return (
    <div>
      <Breadcrumb/>
      <div class="container">
        <div className="row g-1 ">
          <div className="col-md-9">
            <div className="row g-2 ">
              <div className="col-md">
                <div className="firstshoe ">
                 
                <img src="/image/Product Image (1).png" alt="" /> 
                </div>
                <div className="shoespic ">
                  <img
                    class="shoespic-item"
                    src="/image/Product-Picture-01.png"
                    alt=""
                  />
                  <img
                    class="shoespic-item"
                    src="/image/Product-Picture-02.png"
                    alt=""
                  />
                  <img
                    class="shoespic-item"
                    src="/image/Product-Picture-03.png"
                    alt=""
                  />
                  <img
                    class="shoespic-item"
                    src="/image/Product-Picture-04.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="words-of-layer 1">
                  <h5 class="nav-words">Nike Airmax 270 React</h5>
                  <div>
                    <div className="straight">
                      <div className="star">
                        <Rating />
                      </div>
                      <p>0 review</p>
                      <button
                        class="btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Submit a Review
                      </button>
                    </div>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Review
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form id=" formforreview" action="post">
                              <Rating />
                              <div class="content">
                                <h5 for="content" class="unknown">
                                  Content
                                </h5>

                                <textarea
                                  name="content"
                                  id="content"
                                  cols="40"
                                  rows="10"
                                  // onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                              </div>

                             
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick="submitForm()"
                            >
                              submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />
                  </div>
                  <div className="pricing">
                    <div className="pricing-line1">
                      <p className="pricing-line1-1">$299,43</p>
                      <p className="pricing-line1-2">$534,33</p>
                      <p className="pricing-line1-3">24% Off</p>
                    </div>
                    <div className="pricing-line1">
                      <p className="pricing-line1-5">Availability:</p>{' '}
                      <div className="pricingdiv">
                        {' '}
                        <p className="pricing-line1-6">In stock</p>{' '}
                      </div>
                    </div>
                    <div className="pricing-line1">
                      <p className="pricing-line1-5">Category:</p>
                      <p className="pricing-line1-6">Accessories</p>
                    </div>
                    <div className="pricing-line1">
                      <p className="pricing-line1-5">Free shipping</p>
                    </div>
                    <hr />
                    <div className="spec">
                      <div className="spec-word">
                        <p> Select Color:</p>
                      </div>

                      <div className="colourplate">
                        <input type="radio" name="color" id="blue" />
                        <label for="blue">
                          <span class="blue"></span>
                        </label>

                        <input type="radio" name="color" id="red" value="red" />
                        <label for="red">
                          <span class="red"></span>
                        </label>

                        <input type="radio" name="color" id="black" />
                        <label for="black">
                          <span class="black"></span>
                        </label>
                        <input type="radio" name="color" id="yellow" />
                        <label for="yellow">
                          <span class="yellow"></span>
                        </label>
                      </div>
                    </div>
                    <div className="sizesection">
                      <p>size</p>{' '}
                      <div className="siseselect">
                        <select className="select1" id="">
                          <option>XS</option>
                          <option>L</option>
                          <option>M</option>
                          <option>S</option>
                        </select>
                      </div>
                    </div>
                    <hr />
                  </div>

                  <div className="carting">
                    <Count />
                    <div className="carter">
                      <button onClick={addToBasket} class="l me-2">
                        <img src="/image/cart_2.png" alt="" />
                        <p>Add To Cart</p>
                      </button>

                      <button>
                        <img src="/image/icons8-heart-24.png" alt="" />
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="social ">
                    <a href="/" className="btn btn-primary fb block ">
                      <img src="/image/facebook.svg" alt="" />
                      Share on Facebook
                    </a>

                    <a href="/" className="btn btn-primary twitter">
                      <img src="/image/twitter.svg" alt="" />
                      Share on Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active bg-primary "
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  class="bg-light"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  class="bg-light"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  {/* 
    <img src="image/product-picture-9.png" class="d-block w-100" alt="..."/> */}
                  <div className="shoe2">
                    <div className="shoe2wrap">
                      <div className="secondshoe">
                        <img
                          class="mt-5"
                          src="image\product-picture-9.png"
                          alt=""
                        />
                      </div>
                      <div className="ratingss">
                        <div className="ratingss-position">
                          <div className="star2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                          </div>
                          <div className="pricerating">
                            <p className="c">$499</p> <p className="d">$599</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-caption d-none d-md-block">
                    {/* <h5>First slide label</h5> */}
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  {/* <img src="image/product-picture-9.png" class="d-block w-100" alt="..." /> */}

                  <div className="shoe2">
                    <div className="shoe2wrap">
                      <div className="secondshoe">
                        <img
                          class="mt-5"
                          src="image\product-picture-9.png"
                          alt=""
                        />
                      </div>
                      <div className="ratingss">
                        <div className="ratingss-position">
                          <div className="star2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                          </div>
                          <div className="pricerating">
                            <p className="c">$499</p> <p className="d">$599</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-caption d-none d-md-block">
                    {/* <h5>Second slide label</h5> */}
                    {/* <p>Some representative placeholder content for the second slide.</p> */}
                  </div>
                </div>
                <div class="carousel-item">
                  {/* <img src="image/product-picture-9.png" class="d-block w-100" alt="gfdf" /> */}

                  <div className="shoe2">
                    <div className="shoe2wrap">
                      <div className="secondshoe">
                        <img
                          class="mt-5"
                          src="image\product-picture-9.png"
                          alt=""
                        />
                      </div>
                      <div className="ratingss">
                        <div className="ratingss-position">
                          <div className="star2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                            <i classNAme="fas fa-star"></i>
                          </div>
                          <div className="pricerating">
                            <p className="c">$499</p> <p className="d">$599</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-caption d-none d-md-block">
                    {/* <h5>Third slide label</h5> */}
                    {/* <p>Some representative placeholder content for the third slide.</p> */}
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className="shoe2"><div className="shoe2wrap">
      <div className="secondshoe">
      <img class="mt-5" src="image\product-picture-9.png" alt="" />
      </div>
      <div className="ratingss">
      <div className="ratingss-position">
      <div className="star2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
            </div>
            <div className='pricerating'>
              <p className="c">$499</p> <p className="d">$599</p> 
            </div>
      </div>
      </div>
     
      </div>

      </div>
       */}
            {/* <img src="image\product-picture-9.png" class="d-block w-100" alt="..."/> */}
            {/* <div class="carousel-caption d-none d-md-block"> */}
            {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
            {/* </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="image\product-picture-2.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="image\product-picture-3.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



 */}

            {/* <div className="shoe2"><div className="shoe2wrap">
      <div className="secondshoe">
      <img class="mt-5" src="image\product-picture-9.png" alt="" />
      </div>
      <div className="ratingss">
      <div className="ratingss-position">
      <div className="star2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
            </div>
            <div className='pricerating'>
              <p className="c">$499</p> <p className="d">$599</p> 
            </div>
      </div>
      </div>
     
      </div>

      </div> */}
          </div>
        </div>
      </div>

      <div class="container">
        <div className="row g-1">
          <div className="col-md-9">
            <Slate />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="container obtoom-shoe">
        <div className="row g-1">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <div className="shoe2">
              <div className="shoe2wrap">
                <div className="secondshoe2">
                  <img class="mt-5" src="image\product-picture-10.png" alt="" />
                </div>
                <div className="ratingss">
                  <div className="ratingss-position">
                    <div className="star2">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i classNAme="fas fa-star"></i>
                      <i classNAme="fas fa-star"></i>
                    </div>
                    <div className="pricerating">
                      <p className="da">$299,43</p>
                      <p className="d db">$599</p>
                      <p className="c">$499</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    
    </div>
  );
};

export default ReviewPage;
