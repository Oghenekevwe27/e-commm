export const initialState={
    basket:  [],
    user: null,
   
};


function reducer(state, action) {
    switch(action.type){
        case 'ADD_TO_BASKET':
            //adding item
            return {
                ...state,
                basket: [...state.basket, action.item],
               
            };
          
        case 'REMOVE_FROM_BASKET':
        //REMOVING item
        return{state};
       
        default:
            return state;

    }
     
}
export default reducer;