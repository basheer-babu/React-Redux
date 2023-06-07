const initialState={
    name:"basheer",
    address:{
        city:"hyd",
        street:"khaja",
        pincode:"500034"
    }
}
//immer for nested object changes and return in reducer
//to change only street in address 
return produce(state,(draft)=>{
    draft.address.street=action.payload
})