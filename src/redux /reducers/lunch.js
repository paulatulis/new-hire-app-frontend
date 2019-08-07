const initialState = {
    data: []
}

export default(state = initialState, action) => {
 switch(action.type) {
     
     case 'SET_YELP':
         return {...state,data: action.data }
     default:
        return state
    }
}