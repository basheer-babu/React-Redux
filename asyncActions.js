const redux = require("redux");
const axios = require("axios");
const thinkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  errors: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (errors) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: errors,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        errors: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        errors: action.payload,
      };
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
    dispatch(fetchUsersSucceeded(users))

      })
      .catch((error) => {
        //err
    dispatch(fetchUsersFailed(error.message))

      });
  };
};

const store = createStore(reducer, applyMiddleware(thinkMiddleware));

store.subscribe(()=>{console.log("state::",store.getState())})

store.dispatch(fetchUsers())