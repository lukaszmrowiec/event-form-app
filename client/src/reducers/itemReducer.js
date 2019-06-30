import {
  GET_MEMBERS,
  ADD_MEMBER,
} from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ADD_MEMBER:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}
