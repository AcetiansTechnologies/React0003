import { createStore, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk';
import axios from 'axios';

// Action Types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

// Initial State
const initialState = {
  isAuthenticated: false,
  token: null,
  errorMessage: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

// Actions
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', { email, password });
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: 'Login failed. Please check your credentials.',
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('authToken');
  dispatch({
    type: LOGOUT,
  });
};

// Create Store
const store = createStore(authReducer, applyMiddleware(thunk));

// Function to validate token
const validateToken = async (token) => {
  try {
    const response = await axios.get('https://reqres.in/api/validate', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status === 200;
  } catch {
    return false;
  }
};

// Initialize Auth State
const initAuthState = async () => {
  const token = localStorage.getItem('authToken');
  if (token && await validateToken(token)) {
    store.dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } else {
    store.dispatch({
      type: LOGOUT,
    });
  }
};

// Initialize authentication state
initAuthState();

export default store;
