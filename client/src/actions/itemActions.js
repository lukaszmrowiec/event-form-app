import axios from 'axios';
import { GET_MEMBERS, ADD_MEMBER} from './types';
import { returnErrors } from './errorActions';

export const getMembers = () => dispatch => {
  axios
    .get('/api/members')
    .then(res =>
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addMember = item => (dispatch) => {
  axios
    .post('/api/members', item)
    .then(res =>
      dispatch({
        type: ADD_MEMBER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
