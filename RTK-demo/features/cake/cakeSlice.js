const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfcakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfcakes--;
    },
    restocked: (state, action) => {
      state.noOfcakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
