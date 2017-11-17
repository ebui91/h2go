import axios from 'axios';

//INITIAL STATE
const initialState= {
  user: {},
  logged: 'Login',
  searchVal: '',
  products: [],
  cart: []
}


//ACTION TYPES
const REQ_USER= 'REQ_USER';
const GET_PRODUCTS= 'GET_PRODUCTS';
const SEARCH_PRODUCTS= 'SEARCH_PRODUCTS';
const SUBMIT_SEARCH= 'SUBMIT_SEARCH';

//REDUCER
export default function reducer(state= initialState, action){
  // console.log('ACTION TYPE', action.type);
  switch(action.type){
    case REQ_USER + "_PENDING":
      return Object.assign({}, state, { isLoading: true });
    case REQ_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload,
        logged: 'Log Out'
      });
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: action.payload });
    case SEARCH_PRODUCTS:
      return Object.assign({}, state, { searchVal: action.payload });
    case SUBMIT_SEARCH:
      return Object.assign({}, state, { products: action.payload });
    default:
      return state;
  }
}


//ACTION CREATORS
export function reqUser(){
  return{
    type: REQ_USER,
    payload: axios.get('/me').then(response=> {
      return response.data
    })
  };
}

export function getProducts(){
  return{
    type: GET_PRODUCTS,
    payload: axios.get('/products').then(response=>{
      return response.data
    })
  };
}

export function searchProducts(userInput){
  return{
    type: SEARCH_PRODUCTS,
    payload: userInput
  };
}

export function submitSearch(){
  return{
    type: SUBMIT_SEARCH,
    payload: axios.get('/products/search').then(response => {
      console.log('reducer: ', response.data);
      return response.data
    })
  };
}
