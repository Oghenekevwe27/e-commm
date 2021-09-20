import React from 'react';

import Count from '../components/Count';

const cart = () => {
  return (
    <div>
      <div className="container cartfirst">
        <div className="row g-1">
          <div className="col-md-6">
            <div className="cart-heading">PRODUCT</div>
          </div>
          <div className="col-md-2">
            <div className="cart-heading">PRICE</div>
          </div>
          <div className="col-md-2">
            <div className="cart-heading">QTY</div>
          </div>
          <div className="col-md-2">
            <div className="cart-heading">UNIT PRICE</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="container cartsecond">
        <div className="row g-1">
          <div className="col-md-6">
            <div className="cartpage-item">
              <img src="image\Product Image (3).png" alt="" />
              <p className="cart-wordds">Nike Airmax 270 react</p>
            </div>
          </div>
          <div className="col-md-2">
            <p className="cart-words">$998</p>
          </div>
          <div className="col-md-2">
            {' '}
            <Count />
          </div>
          <div className="col-md-2">
            <p className="cart-words">$499</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container cartthird">
        <div className="row g-1">
          <div className="col-md-6">
            <div className="cartpage-item">
              <img src="/image/image Product (11).png" alt="" />
              <p className="cart-wordds">Nike Airmax 270 react</p>
            </div>
          </div>
          <div className="col-md-2">
            <p className="cart-words">$998</p>
          </div>
          <div className="col-md-2">
            <Count />
          </div>
          <div className="col-md-2">
            <p className="cart-words">$499</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container cartfourth">
        <div className="row g-1">
          <div className="col-md-6">
            <div className="container couponbox">
              <form action="">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  class="coupon"
                  placeholder="Voucher code"
                />
                <a href="/" className="btn btn-primary fb block ">
                  Redeem
                </a>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="Subtotal checkout">
                    <label for="Subtotal">Subtotal</label>
                    <input type="text" name="Subtotal" id="Subtotal" />
                  </div>
                  <div class="Shipping fee checkout">
                    <label for="Shipping fee">Shipping fee</label>
                    <input
                      type="tShipping fee"
                      name="Shipping fee"
                      id="Shipping fee"
                    />
                  </div>
                  <div class="Coupon checkout">
                    <label for="Coupon">Coupon</label>
                    <input type="Coupon" name="Coupon" id="Coupon" />
                  </div>
                  <div className="total-check">
                    <p>TOTAL</p>
                  </div>

                  <hr />
                  <a href="/" className="btn btn-primary checkout-btn ">
                    Checkout
                  </a>

                  {/* <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Check Out
                  </button>

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            Make Payment
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form action="">
                            <div className="container paymentmodal">
                              {' '}
                              <div className="row g-1"></div>
                              <div className="col-md-2"></div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="firstname"
                                  id="firstname"
                                  placeholder="Firstname"
                                />

                                <input
                                  type="email"
                                  name="email"
                                  id="emial"
                                  placeholder="Email Address"
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="lastname"
                                  id="lastname"
                                  placeholder="lastname"
                                />

                                <textarea
                                  name="address"
                                  id="address"
                                  cols="30"
                                  rows="5"
                                ></textarea>
                              </div>
                              <div className="col-md-2"></div>
                              <div className="container couponbox"></div>
                              <div className="firstname mb-2"></div>
                              <div className="buyer">
                                <div className="buyer-info"></div>
                              </div>
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
                          <button type="button" class="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div
                    class="modal fade"
                    id="staticBackdrop2"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Previous
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    class="page-link"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    1
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    class="page-link"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop3"
                                  >
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">... page 2</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div
                    class="modal fade"
                    id="staticBackdrop3"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Previous
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    class="page-link"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    1
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    class="page-link"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop2"
                                  >
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">... page 3</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
                
                
                
                
                 */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
