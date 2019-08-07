const initialState = {
    loggedIn: !!localStorage.token,
    errors: {},
    allUsers: []
}

export default(state = initialState, action) => {
 switch(action.type) {
     case 'ERRORS':
         return {...state, errors: {[action.errType]: action.errors} }
     case 'LOG_IN': {
         localStorage.setItem('token', action.token)
         return {...state, loggedIn: true }}
     case 'SET_USER': {
         return{...action.user}
        }
     case 'LOG_OUT': {
         localStorage.removeItem('token')
         return {...state, loggedIn: false }}
     case 'SET_ALL_USERS': {
         return{...state,allUsers: action.users}
     }
     default:
        return state
    }
}