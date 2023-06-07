const redux = require("redux");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers
const applyMiddleware =redux.applyMiddleware

const reduxLogger =require('redux-logger')
const logger =reduxLogger.createLogger()

console.log("loading");
const Cake_Orderd = "Cake_Orderd";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERD = "ICECREAM_ORDERD";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: Cake_Orderd,
    qantity: 1,
  };
}
function restockedCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERD,
    payload: qty,
  };
}

function restockedIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   noOfCakes: 10,
//   noOfIcecreams: 20,
// };
const initialcakeState={
    noOfCakes:10
}
const initialIcecreamState={
    noOfIcecreams:20
}

const cakeReducer = (state = initialcakeState, action) => {
  switch (action.type) {
    case Cake_Orderd:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
      
      case ICECREAM_ORDERD:
        return {
          ...state,
          noOfIcecreams: state.noOfIcecreams - action.payload,
        };
      case ICECREAM_RESTOCKED:
        return {
          ...state,
          noOfIcecreams: state.noOfIcecreams + action.payload,
        };
      default:
        return state;
    }
  };

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:icecreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
console.log("initial state ", store.getState());
const unsubscribe = store.subscribe(() =>{}
//   console.log("undated state ", store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockedCake(4));
//bind action creators
const actions = redux.bindActionCreators(
  { orderCake, restockedCake, orderIcecream, restockedIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockedCake(4);
// actions.orderIcecream();
actions.orderIcecream(4);
actions.restockedIcecream(2);
// console.log("initial state ", store.getState());
unsubscribe();
store.dispatch(orderCake()); //unsubscribed to do change in store,it will not effect.
