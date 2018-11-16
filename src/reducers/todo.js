const initialState = {
  // these are dummy data
  arr: ['eat', 'sleep', 'codesmith'],
  currentText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return {
                ...state,
                currentText: action.payload
            }
        case 'HANDLE_SUBMIT': { // <-- these curly braces ensures that variables used in this case won't be used in other cases
            action.payload.preventDefault();
            const arrCopy = state.arr.slice();
            arrCopy.push(state.currentText);
            return {
              arr: arrCopy,
              currentText: "",
            }
        }
        case 'HANDLE_DELETE': {
          const arrCopy = state.arr.filter((ele, i) => {
            return action.payload !== i
          })
          return {
            ...state,
            arr: arrCopy,
          }
        }
        default:
            return state;
    }
}