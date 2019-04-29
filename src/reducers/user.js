const CHANGE_USERNAME = 'CHANGE_USERNAME';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';

const initialState = {
  todos: [],
  userName: "No Name",
  editMode: false
};

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_USERNAME: {
        let newState = {...state};
        newState.userName = action.data;
        return newState;
      }

      case TOGGLE_EDIT_MODE: {
        let newState = {...state};
        newState.editMode = !newState.editMode;
        return newState; 
      }

      default:
        return state;
    }
  };

export default reducer;