const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_BmOeo6y2EIUedZoOq4Fv8Ejx';

export default STRIPE_PUBLISHABLE;
