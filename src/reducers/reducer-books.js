const bookReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_BOOKS':
          return state;
        case 'REMOVE_TODO':
          return [
              ...state.slice(0, action.index),
              ...state.slice(action.index+1)
          ]  
         case 'ADD_BOOK':
          return [
              ...state,
              {
                  text:action.text,
              }
          ];  
        default:
         return state;  
    }
}

export default bookReducer;