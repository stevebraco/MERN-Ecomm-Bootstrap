
import React from 'react'

function Payment({ isValid }) {
  return (<button className="btn btn-outline-primary btn-lg mt-3 btn-block" onClick={() => null} disabled={isValid}>Checkout</button>);
}
export default Payment;
