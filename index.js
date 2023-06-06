const redux = require("redux");
const createStore = redux.createStore;
console.log("loading");
const Cake_Orderd = "Cake_Orderd";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: Cake_Orderd,
    qantity: 1,
  };
}
function restockedCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        quantity:qty
    }
}

const initialState = {
  noOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Cake_Orderd:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
      case CAKE_RESTOCKED:
        return{
            ...state,
            noOfCakes:state.noOfCakes+action.quantity
        }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("undated state ", store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockedCake(4));
//bind action creators
const actions= redux.bindActionCreators({orderCake,restockedCake},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(4)
// console.log("initial state ", store.getState());
unsubscribe();
store.dispatch(orderCake());//unsubscribed to do change in store,it will not effect.
