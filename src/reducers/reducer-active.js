export default (state = {}, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
         return {
             text:action.text
         }
         default:
          return state;
    }
}