import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert2';

// import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  swal({
    title: 'Payment Successful',
    text: 'Thanks for shopping with us!',
    type: 'success',
    confirmButtonText: 'Confirm'
  });
};

const errorPayment = data => {
  swal({
    title: 'Payment Error',
    text: 'We ran into an error processing your payment.',
    type: 'error',
    confirmButtonText: 'Try Again'
  });
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={'pk_test_BmOeo6y2EIUedZoOq4Fv8Ejx'}
  />

export default Checkout;
