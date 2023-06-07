const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOficeCreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOficeCreams--;
    },
    restocked: (state, actions) => {
      state.noOficeCreams += actions.payload;
    },
  },
 /* when you cakeorderd icecream (free both function)
  extraReducers:{
    ['cake/ordered']:(state)=>{
        state.noOficeCreams--
    }
  }*/
// or this code is best practice

/**extraReducers:(builder)=>{
    builder.addCase(cakeActions.ordered,(state)=>{
        state.noOficeCreams--
    })
}*/
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
