const initialState = {
  fullName: '',
  workPlace: '',
  date: '',
};

export const paramedicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    case 'SEND_FORM':
      return { ...initialState };
    default:
      return { ...state };
  }
};
