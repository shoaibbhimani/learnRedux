const userReducer = (state = {
    isLoading:false,
    isLoaded:false,
    users:[]
}, action) => {
  switch(action.type) {
      case "GET_USER_PENDING":
      return {
          ...state,
           isLoaded:false,
          isLoading:true
      }
      
      case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading:false,
         isLoaded:true,
        users:action.payload.data
      }
      default:
      return state; 
  }
}

export default userReducer;