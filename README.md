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

## Video Demo

> https://www.youtube.com/watch?v=x-wvl8bwFpg&ab_channel=Adarsh
