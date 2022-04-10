## Install redux, react-redux and thunk

```
npm i redux react-redux redux-thunk
```

## Create a 2 folders

- actions
- reducers

# Init Redux

In index.js file

```javascript
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
```

# Create Store

// import the reducers file.

// it accepts takes 2 parameters, 1st is the reducers
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// wrap the application in provider component and pass the store to it.

# reducers.js

// import the reducers
import reducer from './reducer';

import {combineReducers} from 'redux';

export default combineReducers({reducer});

# reducer.js

export default const reducer = (state = [],action) => {
switch(action.type){

}
}

## Dispatch action

import useDispatch
import the action
{getPost}

dispatch(getPost());

# actions

// Action creators are function that return functions

// No async
export const getPosts = () => {
const action = { type: 'FETCH_ALL', payload: []}
return action;
}

export const getPosts = () => async (dispatch) => {

// do something and dispatch the result
dispatch({type: 'FETCH_ALL', payload: result});
}

// Consuming the data from redux store

// import useSelector from 'react-redux';
const data = useSelector(state => state.key);

## Use Constants

Instead of typing identifier of the action types, we can create some constants in a file and export it.
then,whevere ever we need it we can import and use it as we need.

This helps us in easily identifying mis-spelled identifiers and can save hours of debugging. Trust me

// constants.js

```javascript
export const FETCH_BOOKS = 'FETCH_BOOKS';
```

// reducer and dispatch Action

```javascript
import {FETCH_BOOKS} from './constants/constants';

// ....
switch (action.type){
  CASE FETCH_BOOKS:
  // .. do something
}
```

## Redux DevTools

Install Redux devtools extension dependency.

```
npm i -D redux-devtools-extension
```

// In index.js file, import composeWithDevTools Function

```javascript
import { composeWithDevTools } from ‘redux-devtools-extension’;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
```

We can get rid of the previous `compose` import.

## Video Demo

> https://youtu.be/8UvvTJRai8s
